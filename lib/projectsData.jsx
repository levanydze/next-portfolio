export async function getAllProjectIds() {
  // Fetch project data and extract project IDs
  const response = await fetch(
    "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectData.json"
  );
  const data = await response.json();

  const paths = data.map((project) => ({
    params: { projectId: project.id.toString() },
  }));

  return paths;
}
export async function getFilteredProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectData.json"
    );
    const data = await response.json();

    console.log("All projects:", data);

    // Filter projects based on the 'important' property
    const filteredProjects = data.filter((project) => {
      return project.important === true;
    });

    console.log("Filtered projects:", filteredProjects);

    return filteredProjects;
  } catch (error) {
    console.error("Error fetching and filtering projects:", error);
    return [];
  }
}

export async function getProject(id) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectData.json"
    );
    const data = await response.json();
    const project = data.find((project) => project.id === id);
    if (project) {
      return project;
    } else {
      console.error(`Meal with slug ${slug} not found`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching meal:", error);
    return null;
  }
}
