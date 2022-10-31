
import { httpService } from './http.service.js'




export const projectService = {
  query,
  getById,
  getEmptyProject,
  remove,
add,


};

function query() {
  return httpService.get("projects");
}

function getById(projectId) {
  return httpService.get("projects/" + projectId);
}

function getEmptyProject() {
  return {
    name: "",
    summary: "",
  };
}


function remove(projectId) {
  return httpService.delete(`projects/${projectId}`)

}


async function add(project) {
  try {
    if (project._id) {
      const addedProject = await httpService.put("projects", project);
      return addedProject
    }
    else {
      const addedProject = await httpService.post("projects", project);
      return addedProject
    }
  }
  catch (error) {
    console.log(error);
    throw new Error("could not save project");
  }
}

