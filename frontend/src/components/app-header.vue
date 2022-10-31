<template>
  <main class="header-container">
   <div class="bg-img">
    <img src="@/assets/images/flat-illustration-programmer_571891-234.jpg" alt="">
   </div>
   <div class="interduce">
    <div>Hi ,</div> 
    <div>Im Issac Razabi,</div> 
    <p :v-model="changeText">{{changeText}}</p> 
    <!-- <button> <a href="https://res.cloudinary.com/dg6yaccvn/raw/upload/v1629797745/Issac__Razabi_Resume_u5wwfr.docx">Download my resume</a></button> -->
    <el-button type="text" @click="open">Download my resume</el-button>
   </div>
  </main>
</template>

<script>

export default {
  name: "app-header",
  data() {
    return {
     changeText : '',
     intervalAdd : null,
    word : 'Fullstack developer',
    index:0,
    reduceIndex : 0,
    speed: 350
    };
  },
  components: {
  
  },
  computed: {
    },
  methods: {
    changeWord(){
              this.intervalAdd  =  setInterval(() => {
                if(this.changeText.includes('|')) {
                  this.changeText = this.changeText.replace('|','');
                }
       this.changeText+=this.word[this.index]
     if(this.index<19) this.index++
     else {
       this.changeText=this.word.substr(0,this.word.length-this.reduceIndex) +'|'
    if(this.reduceIndex<9) {
      this.reduceIndex++
      } 
else{
  this.index=10
  this.reduceIndex=0
  }
       }
       }, this.speed);
    },
     open() {
        this.$alert('<a href="https://res.cloudinary.com/dg6yaccvn/raw/upload/v1659525599/Issac__Razabi_Resume_kii7a4.docx"><img style="width: 100px;height: 100px;margin: 43px;"  src="https://cdn.appuals.com/wp-content/uploads/2019/01/MS-Word-768x727.png.webp"/></a><a href="https://res.cloudinary.com/dg6yaccvn/image/upload/v1659525594/Issac__Razabi_Resume_ozwsxe.pdf"><img style="width: 100px;height: 100px;margin: 43px;" src="https://science.nrao.edu/science/reports/gender-related-systematics-cycles12a-19a/833pxPDF_file_icon.svg.png/image"/></a>', {
          dangerouslyUseHTMLString: true
        });
      }
  },
  created(){

  this.changeWord()
 
  },
  destroy() {
    clearInterval(this.intervalAdd)
    this.intervalAdd = null
  }
}
</script>




<style scoped>
.header-container{
  display: flex;
  align-items: center;
}
  @media (max-width: 750px) {
    .header-container{
  display: flex;
  align-items: center;
    flex-direction: column;
}
  }
/* .bg-img{
  flex-basis: 50%;
 background-image: url("../assets/images/me.jpg");
 border-radius: 50%;
 height: 390px;
 width: 390px;
 background-repeat: no-repeat;
    background-size: cover;
} */
.interduce{
  /* flex-basis: 50%; */
  font-family: 'latoregular';
  /* font-family: 'latobold'; */
/* font-family: 'eurofbold'; */
  height: 250px;
    text-align: center;
    font-size: 2rem;
}
button {background: white; font-family: 'latoregular';font-size: 2rem;
    color: #fff;
    padding: 8px;
    align-items: center;
    background-color: #fc3549;
    border: none;
    height: 2.8125rem;
    box-shadow: 0 9px 29px rgb(252 53 73 / 22%);
    border-radius: 30px;
    padding: 0 10px;
    transition: background-color .2s ease-in-out;
}
a {
  list-style: none;
  text-decoration: none;
  color: white;
}
span  {
  display: none;
}

@media (max-width:740px) {
.el-message-box__wrapper{
 position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 240px;
    margin: auto;
}
}
</style>