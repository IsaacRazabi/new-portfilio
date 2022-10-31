import { projectService } from '../services/project.service';



export const projectStore = {
    state: {
       projects: [],
    },
    getters: {
        projectsToDisplay( state ) {
             return  state.projects 
            }
    },
    mutations: {
        setProjects(state, { projects }) {
            state.projects = projects;
        },
        addProject(state, { project }) {
            state.projects.unshift(project)
        },
        removeProject(state, { projectId }) {
            state.projects = state.projects.filter(project => project._id !== projectId)
        },
    },
    actions: {
        async loadProjects(context) {
            try {
                const projects = await projectService.query();
                context.commit({ type: 'setProjects', projects })
            } catch (err) {
                console.log('projectsStore: Error in loadProjects', err)
                throw err
            }
        },        
        async saveProject({commit}, { project }){
            try{
                await projectService.add(project)
                .then(savedProject => {
                    commit({type: 'addProject', savedProject });
                      return savedProject;
                    })
              
            }
            catch {
                console.log('we have a problem');
            }
        
    },
// async updateProject(context, { review , project}){
//     try {
//         project.reviews.push(review);
//         project = await projectService.add(project)
//         return review;
//     } catch (err) {
//         console.log('reviewStore: Error in addReview', err)
//         throw err
//     }},


}
}