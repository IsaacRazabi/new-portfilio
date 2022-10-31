<template>
<main class="about-wrapper">
  <p class="head-line">About me</p>
<main class="about-container">
<img class="abuot-img" src="@/assets/images/me.jpg">
<main class="about-text-container">
<p>HI! I AM <span>Isaac Razabi </span> 
	I'm Writing Single Page Applications using Advanced Web Technologies such as <span>React, Vue, NodeJs and much more. </span></p> 
	<p> I am a trying to be a pleasant team player with good human relations. 
	I am <span> very passionate </span> to code and finding solutions to complicated logical problems </p>
  <el-button type="text" @click="openCertifications"><p class="certifications"><span>Here you can check some of <div> my certifications</div></span> </p></el-button>
</main>
</main>
</main>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
  }
  },
  components: {

  },

  computed: {
    
},
  methods: {
openCertifications(){
    this.$alert('<a href="https://res.cloudinary.com/dg6yaccvn/image/upload/v1659903819/%D7%A1%D7%99%D7%95%D7%9D_%D7%A7%D7%95%D7%A8%D7%A1_nestjs_txvjnt.pdf"><p> Nestjs- Udemy </p></a><a href="https://res.cloudinary.com/dg6yaccvn/image/upload/v1636480453/Isaac_razabi_wufidu.pdf"><p> Coding Academy </p></a><a href="https://res.cloudinary.com/dg6yaccvn/image/upload/v1636480452/CS_GOV_CS_reshatot101_%D7%AA%D7%A2%D7%95%D7%93%D7%94_IL_%D7%A7%D7%9E%D7%A4%D7%95%D7%A1_z5es3j.pdf"><p>IL קמפוס</p></a><a href="https://res.cloudinary.com/dg6yaccvn/image/upload/v1636480452/CertificateOfCompletion_Angular_Essential_Training_cy4m4s.pdf"><p>Linkedin certfication</p></a>', {
          dangerouslyUseHTMLString: true  
        });
  }
}
}
</script>
<style scoped>
.about-container{
  display: flex;
      gap: 46px;
    align-items: center;
}
  @media (max-width: 750px) {
   .about-container{
  display: flex;
  flex-direction: column;
      /* gap: 46px;
    align-items: center; */
} 
  }
.abuot-img{
  border-radius: 50%;
  flex-basis: 50%;
}
.about-text-container{
  flex-basis: 50%;
  max-width: 350px;
  
}
.about-wrapper{
   font-family: "latoregular";
  font-size: 1.25rem;
  margin-bottom: 60px;
}
p span {
  color:  red;
  font-size: 1.5rem;
}
.head-line{
      font-family: 'latoregular';
    font-size: 1.5rem;
     text-align: center;
}
</style>