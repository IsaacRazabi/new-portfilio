<template>
  <main>
<p class="head-line">
    Education
</p>
<main class="education-container">
<span class="card-container">
<a href="https://www.coding-academy.org/index.php"><img class="education-logo" src="@/assets/images/codingacademy.ee27fcc3.png" > </a> 
<p> Full Stack Developer </p>
<p> An intense and prestige Bootcamp 
 Top technologies for fullStack developer with varaity of frameworks
640 hours over 5 months</p>
</span>
<span class="card-container">
<img class="education-logo" src="@/assets/images/openu.jpg" >
<p> Open University </p>
<p> B.A Humanities and 
 social sciences            

  </p>
</span>
</main>
<p class="head-line">
    Skills
</p>
<div class="skills-container">
    <img src="@/assets/images/skills/css.png" >
    <img src="@/assets/images/skills/download.jpg" >
    <img src="@/assets/images/skills/ES6.png" >
    <img src="@/assets/images/skills/html.png" >
    <img src="@/assets/images/skills/js.png" >
    <img src="@/assets/images/skills/node.png" >
    <img src="@/assets/images/skills/react.png" >
    <img src="@/assets/images/skills/scss.png" >
    <img src="@/assets/images/skills/vue.png" >
</div>


  </main>
</template>

<script>

export default {
  name: "app-main",
  data() {
    return {

    };
  },
  components: {
  
  },
  computed: {
    },
  methods: {
  }
}
</script>




<style scoped>
p{
    font-family: 'latoregular';
        font-size: 1.5rem;
}
.education-container{
display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
}
.card-container{
    flex-basis: 50%;
}
.education-logo{
    width: 250px;
    height: 250px;
}
.skills-container{
    display: flex;
justify-content: center;
flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
}
  /* @media (max-width: 750px) {
    .skills-container {
  display: flex;
  flex-direction: column-reverse;
  } } */
img{
        max-width: 90px;
    max-height: 90px;
}
.head-line{
  text-align: center;
}
</style>