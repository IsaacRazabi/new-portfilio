<template>
 <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
</template>

<script>
// import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
export default {
  props:{
url : {
  type: String
}
  },
data(){
  return  {
videoId :'',
// startTime:0
  }
},
 methods: {
       method(url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      // this.startTime = this.$youtube.getTimeFromURL(url)
    }
  },
  created(){
    this. method(this.url)
  }

};
</script>

<style lang="scss">

</style>