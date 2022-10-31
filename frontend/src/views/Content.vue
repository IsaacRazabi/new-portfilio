<template>
<main class="contact-layout">
    <p class="head-line">contect me here : </p>
    <main class="contact-wrapper">
  <section class="contact-img-container">
<p class="contact-item"><img src="@/assets/images/contact/home.jpg" alt=""> Jerusalem</p>
<p class="contact-item"><img src="@/assets/images/contact/mail.png" alt=""> Poetryor@gmail.com</p>
<p class="contact-item"><img src="@/assets/images/contact/phone.jpg" alt=""> 0546-352-350</p>
<a href="www.linkedin.com/in/isaac-razabi-b30663255"><img src="@/assets/images/contact/linkedin.jpg" alt=""></a>
<a href="https://www.facebook.com/Isaac.Razabi"><img src="@/assets/images/contact/facebook.png" alt=""></a>
</section>
<!-- <form class="contact-form"><input type="hidden" name="contact_number"><div><label>Your Name</label><input type="text" name="user_name" value=""></div><div><label>Email Address</label><input type="email" name="user_email" value=""><span class="fs16">new Promise (I'll never share it with anyone);</span></div><div><label>What's on your mind?</label><textarea name="message"></textarea></div><div><button class="fs24 action-btn" type="submit" value="Send">Email me!</button></div></form> -->
</main>
</main>
</template>

<script>

export default {
  name: "Content",
 data() {
    return {
  }
  },
  components: {

  },
}
</script>
<style scoped>
.contact-img-container{
display: flex;
/* flex-direction: column; */
  /* flex-basis: 30%; */
   /* border-right: 1px solid lightseagreen; */
   /* margin-right: 25px; */
/* margin-inline-start: ; */
justify-content: space-between;
}
  @media (max-width: 750px) {
   .contact-img-container{
  display: flex;
  flex-direction: column;
  align-items: center;
      /* gap: 46px;
    align-items: center; */
} 
  }
img{
      height: 75px;
    width: 75px;
}
.contact-item{
  display: flex;
  align-items: center;
}
@media (max-width: 750px) {
  .contact-item{
  display: flex;
  align-items: center;
  flex-direction: column;
  }
}
.contact-form{
  display: flex;
  /* flex-direction: column; */
  flex-basis: 70%;
   justify-content: space-evenly;
}
/* .contact-layout{
  max-width: 500px;
} */
.head-line{
      font-family: 'latoregular';
    font-size: 1.5rem;
     text-align: center;
}
.contact-wrapper{
  /* display: flex; */
  /* border-radius: 1%; */
 /* border: 1px solid lightseagreen; */

}
</style>