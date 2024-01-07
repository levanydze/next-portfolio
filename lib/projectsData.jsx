export async function getProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectData.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
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
