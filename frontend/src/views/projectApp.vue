<template>
<main id="projects">
  <section v-if="projects">
    <projectList :projects="projects"></projectList>
  </section>
  </main>
</template>

<script>
import projectList from "../components/project-list.vue";


export default {
  props: {},
  data() {
    return {

    };
  },
  methods: {

  },

  computed: {
    projects() {
      return this.$store.getters.projectsToDisplay;
    },
  },
  components: {
    projectList,
  },
  created() {
  
    this.$store.dispatch("loadProjects");

  },
};
</script>

<style scoped>
</style>
