import React from "react";

import Card from "./card";
import styles from "./page.module.css";
import { getProjects } from "../../lib/projectsData";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className={styles.cardWrapper}>
      {/* down here you find most important projects */}
      <h1 className="headText">Highlighted Projects</h1>
      <div className={styles.mapWrapper}>
        {projects
          .filter((project) => project.important)
          .reverse()
          .map((project, index) => (
            <div key={project.id}>
              <Card {...project} filter={true} />
            </div>
          ))}
      </div>

      {/* down here you find map of all projects */}
      {/* <h2 className="headText">from walking sticks to web development 2023</h2>
      <div className={styles.mapWrapper}>
        {projects.map((project, index) => (
          <div key={project.id}>{project.id ? <Card {...project} /> : ""}</div>
        ))}
      </div> */}
    </div>
  );
}
