<template>
<section  id="home" class="home" >
<div class="nav-wraaper"> 
 <navBar></navBar>
 </div>
<main class="container">
 <appHeader></appHeader> 
<appMain></appMain>
<projectApp id="projects"></projectApp>
<About  id="about"></About>
 <Content id="content"></Content>
<appFooter></appFooter>  
      
</main>
</section>
</template>

<script>
import navBar from '../components/nav-bar.vue'
import appFooter from '../components/app-footer.vue'
import projectApp from '../views/projectApp.vue'
import appHeader from '../components/app-header.vue'
import appMain from '../components/app-main.vue'
import About from '../views/About.vue'
import Content from '../views/Content.vue'

export default {
  name: 'Home',
  components: {
    appFooter,
navBar,
projectApp,
appHeader,
appMain,
About,
Content
  }
}
</script>

<style scoped>
     
.container {
  max-width:  1000px;
  margin: 0 auto; }
  @media (max-width: 740px) {
    .container {
      max-width: 400px; } }
       @media (max-width: 490px) {
    .container {
      /* max-width: 100%; */
      }
      }

      .nav-wraaper{
          max-width:  1300px;
  margin: 0 auto; }
  @media (max-width: 980px) {
    .nav-wraaper {
      max-width: 740px; } }
  @media (max-width: 740px) {
    .nav-wraaper {
      max-width: 100%; } }
     
       @media (max-width: 740px) {
.home{
  margin:20px;
}
        }

</style>