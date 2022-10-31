<template>
  <main>
    <navBar></navBar>

  <section v-if="project">
        <router-link to="/"><button >X</button></router-link>
        <div class="details-container"> 
        <section class = "details">
          <!-- <p> {{project.content}}</p> -->
          <div class="second-panel ">
                <div class="images images-wrapper grid ">
                        <div class="image-item placeholder"></div>
                        <div class="image-item placeholder1"></div>
                        <div class="image-item placeholder2"></div>
                </div>
            </div>

    </section>
    <router-link  :to="'/projects/' + lastProjectId">previous project</router-link>
    <router-link :to="'/projects/' + nextProjectId">Next project</router-link>
    </div>
    </section>
    <appFooter></appFooter>
  </main>
  
</template>

<script>
import { projectService } from "../services/project.service.js";
import navBar from "../components/nav-bar.vue";
import appFooter from "@/components/app-footer.vue";

export default {
  data() {

      
  },
  computed: {

  },
  components: {
    
    navBar,
    appFooter,
  },
  methods: {
   
  },
  created() {
    window.scrollTo(0, 0);
    const { projectId } = this.$route.params;
    projectService.getById(projectId).then((project) => {
      this.project = project;
    });
  },
};
</script>

<style scoped>

</style>>

