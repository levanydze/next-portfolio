export async function getProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectDatao.json",
      { cache: "no-store" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProject(id) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/portfoliosupport/main/projectDatao.json",
      { cache: "no-store" }
    );
    const data = await response.json();
    const project = data.find((project) => project.id === id);
    if (project) {
      return project;
    } else {
      console.error(`Project with  ${id} not found`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
