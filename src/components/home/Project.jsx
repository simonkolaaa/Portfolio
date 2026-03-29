import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, profiles }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  const totalLength = profiles.reduce((acc, p) => acc + (p.reposLength || 0) + (p.specificRepos ? p.specificRepos.length : 0), 0);
  const dummyProjectsArr = new Array(totalLength).fill(dummyProject);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    for (const profile of profiles) {
      const { username, reposLength, specificRepos } = profile;
      const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
      const specficReposAPI = `${API}/repos/${username}`;

      try {
        if (reposLength > 0) {
          const response = await axios.get(allReposAPI);
          const filteredRepos = response.data.filter(repo => repo.name.toLowerCase() !== "portfolio");
          repoList = [...repoList, ...filteredRepos.slice(0, reposLength)];
        }

        if (specificRepos && specificRepos.length > 0) {
          for (let repoName of specificRepos) {
            try {
              const response = await axios.get(`${specficReposAPI}/${repoName}`);
              repoList.push(response.data);
            } catch (error) {
              console.error(`Error fetching ${repoName} for ${username}:`, error.message);
            }
          }
        }
      } catch (error) {
        console.error(`Error fetching repos for ${username}:`, error.message);
      }
    }

    const uniqueUrls = new Set();
    const uniqueRepos = repoList.filter(repo => {
      if (repo && repo.svn_url && !uniqueUrls.has(repo.svn_url)) {
        uniqueUrls.add(repo.svn_url);
        return true;
      }
      return false;
    });
    setProjectsArray(uniqueRepos);
  }, [profiles]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
