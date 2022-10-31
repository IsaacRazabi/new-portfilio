<template>
 <header>
    <section class="container header-wrapper flex align-center">
      <div class="logo flex-1">
        IsaacRazabi
        <span>.</span>
      </div>
      <nav id="mainMenu" class="main-menu-wrapper">
        <ul :class="{open:shoeMobileMenu}" class="main-menu clean-list flex align-center" >
          <li @click.prevent="scrollToTop('home')">
            <router-link to="/" 
              >Home</router-link
            >
          </li>
          <li  @click.prevent="scrollToTop('about')">
            <router-link  to="about">About me</router-link>
          </li>
          <li  @click.prevent="scrollToTop('projects')" >
            <router-link  to="projects" >Projects</router-link>
          </li>
          <li @click.prevent="scrollToTop('content')">
            <router-link   to="content">Content</router-link>
          </li>
           <li @click.prevent="scrollToTop('JavaScripTextBook')">
            <router-link  to="JavaScripTextBook">Learn JavaScript</router-link>
          </li>
        </ul>
        <button
          class="toggle-menu-btn fa"
          @click.prevent="toogleShow()"
          alt="Open main menu"
        >
         <img class="menu-img" src="@/assets/images/menu.png" alt="">
        </button>
        <div
        :class="{closeMenu:shoeMobileMenu}"
          class="toggle-menu-screen screen"
           @click.prevent="toogleShow()"
          alt="toggle main menu"
        ></div>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isShow: true,
shoeMobileMenu:false,
      onTop: false,
    };
  },
  components: {},

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    isScroll() {
      if (this.onTop) return true;
      else {
        return false;
      }
    },
  },
  methods: {
    toogleShow() {
      
      this.shoeMobileMenu =!this.shoeMobileMenu
    },
     scrollToTop(comp) {
       const position = document.getElementById(comp).offsetTop;
      //  if(comp ==='home') console.log('sdfds'); 
                // window.scrollTo(0,position);
                 window.scrollTo({ top: position, behavior: "smooth" })
           }
  },
  nav(link) {
          const position = document.getElementById(link.id).offsetTop;
          
          // smooth scroll
          window.scrollTo({ top: position, behavior: "smooth" });  
   },
   toggleMenu(){
 this.shoeMobileMenu =!this.shoeMobileMenu
   }
};
</script>
<style scoped>


@charset "UTF-8";
/* Layout */
/* Fonts */
/* Colors*/
/* Borders */
/*----------  Lato  ----------*/
@font-face {
  font-family: 'latoregular';
  src: url("../assets/fonts/lato/Lato-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal; }

@font-face {
  font-family: 'latobold';
  src: url("../assets/fonts/lato/Lato-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal; }

/*----------  Eurof  ----------*/
@font-face {
  font-family: 'eurofbold';
  src: url("../assets/fonts/euro/eurof55.ttf") format("truetype");
  font-weight: normal;
  font-style: normal; }

/*----------  Font Awesome  ----------*/
@font-face {
  font-family: 'fontawesome';
  src: url("../assets/fonts/fontawesome/FontAwesome.otf");
  src: url("../assets/fonts/fontawesome/fontawesome-webfont.eot") format("embedded-opentype"), url("../assets/fonts/fontawesome/fontawesome-webfont.woff2") format("woff2"), url("../assets/fonts/fontawesome/fontawesome-webfont.woff") format("woff"), url("../assets/fonts/fontawesome/fontawesome-webfont.ttf") format("truetype"), url("../assets/fonts/fontawesome/fontawesome-webfont.svg") format("svg");
  font-weight: normal;
  font-style: normal; }

  .modal{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding : 2rem 4rem;

  }
.closeBar{
  display: flex;
  justify-content: flex-end;
  margin-right: -2rem;
  margin-top: -1rem;
  cursor: pointer;
}
  
.fa {
  display: inline-block;
  font-family: fontawesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

/* Breakpoint mixins */
/* Size Functions */
/* Layout mixins */
.clean-list {
  list-style-type: none;
  margin: 0;
  padding: 0; }

.logo {
  font-family: eurofbold, serif;
  font-size: 2.5rem; }
  .logo span {
    color: #58c93a; }

.flex {
  display: flex; }

.flex-1 {
  flex: 1; }

.justify-center {
  justify-content: center; }

.align-center {
  align-items: center; }

.space-between {
  justify-content: space-between; }

.space-around {
  justify-content: space-around; }

.social-wrapper {
  margin-bottom: 1.25rem; }
  @media (max-width: 980px) {
    .social-wrapper {
      justify-content: center; } }
  .social-wrapper a {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    text-align: center;
    line-height: 40px;
    background: #e5e5e5;
    color: #fff;
    text-decoration: none;
    margin-right: 1.25rem;
    transition: all .3s; }
    .social-wrapper a:hover {
      background: #516fad; }

a.more {
  display: inline-block;
  color: #c2c2c2;
  border: 2px solid #c2c2c2;
  height: 40px;
  line-height: 36px;
  padding: 0 25px;
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  margin: 1.25rem 0;
  transition: all .3s; }
  a.more:hover {
    background: #516fad;
    border-color: #516fad;
    color: #fff; }

/*---------- Layout  ----------*/
* {
  box-sizing: border-box; }

html {
  font-family: latoregular, sans-serif;
  color: #292929; }

body {
  margin: 0; }

h1, h2, h3, h4, h5, h6 {
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  font-weight: normal;
  font-family: latobold, sans-serif; }

h1 {
  font-size: 3rem;
  letter-spacing: 2px; }

button {
  cursor: pointer; }

header {
  /* background: url("../assets/images/header-bg.gif"); */
  height: 100px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  /* color: #fff; */
  font-family: latobold, sans-serif; }
  header .header-wrapper {
    height: 130px; }
  header .logo {
    padding: 0 16px; }

.main-menu a {
  /* color: #fff; */
  text-decoration: none;
  display: block;
  line-height: 130px;
  height: 130px;
  width: 8.4375rem;
  text-align: center;
  color: #292929;
  /* border-right: 1px solid #1e1e1e; }
  .main-menu a:first-child {
    border-left: 1px solid #1e1e1e; } */
}
  .main-menu a.active {
    /* border-bottom: 6px solid #58c93a; */
    color: #58c93a; }
  .main-menu a:hover {
    color: #58c93a; }

@media (max-width: 772px) {
  .main-menu {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 300;
    background: snow;
    height: 100vh;
    transition: transform 1s;
    transform: translate(100%, 0); }
    .open  {
      transform: translate(0, 0); }
    .main-menu a {
      height: auto;
      line-height: 1;
      padding: 20px 0;
      width: 60vw;
      border: none;
      border-bottom: 1px solid #1e1e1e; }
      .main-menu a.active {
        border-width: 1px; }
      }

.toggle-menu-screen {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(42, 42, 42, 0.6);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  transition: opacity .5s; }
  @media (max-width: 772px) {
    .toggle-menu-screen {
      display: block; } }
  .open .toggle-menu-screen {
    visibility: visible;
    opacity: 1; }
.closeMenu{
 visibility: visible;
    opacity: 1;
}
.toggle-menu-btn {
  background: none;
  border: none;
  /* color: #fff; */
  font-size: 1.75rem;
  padding: 20px;
  display: none; }
  @media (max-width: 772px) {
    .toggle-menu-btn {
      display: block; } }

.hero {
  height: 23.4375rem;
  background-image: url("../assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  color: #fff; }
  .hero::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); }
  .hero h1 {
    position: relative;
    z-index: 10;
    max-width: 80%;
    text-align: center; }

.main-wrapper {
  border-right: 1px solid #e1e0e0;
  border-left: 1px solid #e1e0e0;
  padding: 20px; }

  @media (max-width: 980px) {

    .placeholder1{
grid-column: 2/3 ;
grid-row: 1/3;
    }
    .placeholder2{
grid-row: 2/3;
grid-column: 1/2;
    }
  
    /* .main-wrapper {
      flex-direction: column; } */
     }

/*      
.container {
  max-width: 1500px;
  margin: 0 auto; }
  @media (max-width: 980px) {
    .container {
      max-width: 740px; } }
  @media (max-width: 740px) {
    .container {
      max-width: 100%; } } */

.container{
 position: fixed;
    background: white;
    z-index: 1000;
    /* display: flex;
    justify-content: space-between; */
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    /* box-shadow: 0 9px 29px rgb(252 53 73 / 22%); */
}
  .main-wrapper .first-panel {
    /* width: 300px; */
    flex-basis: 34%;
    padding-right: 20px;
   }
  
   
  .main-wrapper .second-panel {
    width: 620px;
  }
    
.main-pager {
  border-right: 1px solid #e1e0e0;
  border-left: 1px solid #e1e0e0;
  padding: 20px;
  border-top: 1px solid #e1e0e0;
  color: #818181; }
  .main-pager button {
    background: none;
    border: none;
    font-size: 1.125rem;
    font-family: latobold, sans-serif;
    text-transform: uppercase;
    color: inherit;
    padding: 0; }
    .main-pager button:hover {
      color: #516fad; }
  .main-pager .prev::before {
    content: "← "; }
  .main-pager .next::after {
    content: " →"; }

footer {
  background: #f8f8f8;
  padding: 70px 0;
  text-align: center;
  border-top: 1px solid #e1e0e0;
  color: #a6a6a6;
  position: fixed;
  bottom: 0;
  left: 0; }
  footer .logo {
    color: #292929;
    margin-bottom: 30px; }

    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
  }
/* .felx-layout{
  display: flex;
  flex-basis: 50%;
} */


.images-wrapper {
  height: 100%; }

  .grid{
    display: grid;
    grid-template-columns:2fr 1fr ;
    grid-template-rows:1fr 1fr ;
    gap: 6px;
  }
.placeholder {
  background: url("../assets/images/mine-swippers.png");
  background-position: center center;
  background-size: cover;
  width: 100%;
  /* height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;  */
}

  .placeholder1 {
    background: url("../assets/images/mine-swippers1.png");
    background-position: center center;
    background-size: cover;
    width: 100%;
    /* height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; */
   }

    .placeholder2 {
      background: url("../assets/images/image-003.jpg");
      background-position: center center;
      background-size: cover;
      width: 100%;
      /* height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff; */
    grid-column: 1/3; }

    
          /* @media (max-width: 980px) {
            .main-wrapper .second-panel {
              width: 100%; } }
      .images{
        height: 500px;
      }
              .second-panel {
                flex-basis: 66%;
              } */
      
              
              @media (max-width: 980px) {
            .main-wrapper .first-panel {
              width: 100%;
              column-count: 2;
              /* column-gap: 20px;
              padding-right: 0;
              margin-bottom: 20px; */
            }
             .main-wrapper .second-panel {
               height: 500px
              }
            
              /* .flex{
                flex-direction: column;
             } */
             .placeholder2{
               grid-column: unset;
              }
            }
            @media (max-width: 550px) {
              .main-wrapper .first-panel {
                column-count: 1;
                column-gap: 0; } 
              .images{
                display: flex;
                flex-wrap: wrap;
              }
              }
.menu-img{
  width: 75px;
    height: 75px;
}
</style>