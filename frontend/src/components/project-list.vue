<template>
  <section>
    <p class="head-line">Projects</p>
    <section class="list-section">
        <div class="img-container">
          <!-- <span v-for="project in projects" :key="project._id">
            <projectPreview :project="project"></projectPreview>
          </span> -->
           
            <projectPreview v-for="project in projects" :key="project._id" :project="project"></projectPreview>
          
        </div>
  
    </section>
  </section>
</template>

<script>
import projectPreview from "./project-preview.vue";

export default {
  data() {
    return {};
  },
  props: {
    projects: {
      type: Array,
    },
  },
  methods: {},
  computed: {},
  components: {
    projectPreview,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.ul-clean {
  list-style-type: none;
}
.list-section {
  max-width: 900px;
  margin: auto;
  /* margin-bottom: 60px; */
}

/* .preview-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
} */
.img-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-bottom: 60px;
}
  @media (max-width: 750px) {
    .img-container {
        /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  margin-bottom: 60px;  */
  display: flex;
  flex-direction: column-reverse;
  } }

.img-container > :nth-child(1) {
  grid-column: 1/4;
  grid-row: 3/4;
  height: 230px;
}
.img-container > :nth-child(2) {
  grid-column: 1/4;
  grid-row: 2/3;
  height: 340px;
  margin-right: 10px;
}
.img-container > :nth-child(3) {
  grid-column: 4/6;
  grid-row: 3/4;
 height: 230px;
}
.img-container > :nth-child(4) {
  grid-column: 4/6;
  grid-row: 2/3;
   height:340px;
}
.img-container > :nth-child(5) {
  grid-column: 1/6;
  grid-row: 1/2;
  height: 360px;
}
.head-line {
  font-family: "latoregular";
  font-size: 1.5rem;
  text-align: center;
}
</style>
