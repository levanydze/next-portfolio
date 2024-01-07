// pages/projects/[projectId].js

import Titles from "../../components/titles";
import PhotoInfo from "../../components/photoInfo";
import styles from "../../styles/page.module.css";
import { getProject, getAllProjectIds } from "../../lib/projectsData";

export default function Project({ data }) {
  return (
    <main>
      {data ? (
        <div>
          <Titles
            date={data.date}
            title={data.title}
            description={data.description}
          />
          <PhotoInfo
            date={data.date}
            image={data.image}
            title={data.title}
            study={data.study}
            youtube={data.youtube}
            udemy={data.udemy}
            byEd={data.byEd}
            youtubeIcon={data.youtubeIcon}
            udemyIcon={data.udemyIcon}
            byEdIcon={data.byEdIcon}
            course={data.course}
            courseDesc={data.courseDesc}
            courseLink={data.courseLink}
            project={data.project}
            projectTitle={data.projectTitle}
            github={data.github}
            projectWeb={data.projectWeb}
            gitIcon={data.gitIcon}
            someText={data.someText}
            someText2={data.someText2}
            detDescription={data.detDescription}
          />
        </div>
      ) : (
        <p className={styles.infoNotFound}> No Data Found</p>
      )}
    </main>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds();
  return {
    paths,
    fallback: false, // or true if you want to enable incremental static regeneration
  };
}

export async function getStaticProps({ params }) {
  const projectId = parseInt(params.projectId);
  const data = await getProject(projectId);

  return {
    props: {
      data,
    },
  };
}
