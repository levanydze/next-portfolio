import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

import Titles from "./components/titles";
import PhotoInfo from "./components/photoInfo";
import styles from "./page.module.css";
import { getProject } from "@/lib/projectsData";

export default async function Project({ params }) {
  const projectId = parseInt(params.projectId);
  const data = await getProject(projectId);

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
        <div className={styles.notFoundWrap}>
          <p className={styles.infoNotFound}>Data not found</p>
          <Link href="./">
            <p className={styles.back}>Back to projects</p>
          </Link>
        </div>
      )}
    </main>
  );
}
