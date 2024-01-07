import Card from "./card";
import styles from "./page.module.css";
import { getProjects, getFilteredProjects } from "../../lib/projectsData"; // esec egari

export default async function ProjectsPage() {
  const projects = await getProjects();
  const filteredProjects = await getFilteredProjects();

  return (
    <div className={styles.cardWrapper}>
      {/* down here you find most important projects */}
      <h1 className="headText">Highlighted Projects</h1>
      <div className={styles.mapWrapper}>
        {filteredProjects.map((project, index) => (
          <div key={project.id}>
            <Card {...filteredProjects} />
          </div>
        ))}
      </div>

      {/* down here you find map of all projects */}
      <h2 className="headText">from walking sticks to web development 2023</h2>
      <div className={styles.mapWrapper}>
        {projects.map((project, index) => (
          <div key={project.id}>{project.id ? <Card {...project} /> : ""}</div>
        ))}
      </div>
    </div>
  );
}
