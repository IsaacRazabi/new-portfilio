    <template>
<main class="textBook-wrapper">
    <span class="nav-wraaper"> 
 <navBar></navBar>
    </span>
    <main >
    <iframe class="pdf-wrapper" src="https://res.cloudinary.com/dg6yaccvn/image/upload/v1633591524/%D7%9E%D7%99%D7%9C%D7%95%D7%9F_%D7%9E%D7%95%D7%A9%D7%92%D7%99%D7%9D_js_-_%D7%99%D7%A6%D7%97%D7%A7_%D7%A8%D7%A6%D7%91%D7%99_e9llud.pdf" >
    </iframe>
   </main>
    </main>
</template>
<script>
import navBar from '../components/nav-bar.vue'
export default {
  name: "JavaScripTextBook",
  data() {
    return {
  }
  },
  components: {
navBar
  },

  computed: {
    
},
  methods: {

  }
}
</script>
<style scoped>
.textBook-wrapper{
    /* display: flex;
    justify-content: center; */
    width: 100%;
   
}
.pdf-wrapper{
    width:90%;
    height:100vh;
        display: flex; 
margin: auto;
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
      
</style>