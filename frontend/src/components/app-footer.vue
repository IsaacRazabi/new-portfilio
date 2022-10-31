<template>
  <section class="footer-container">
<p>Cheack this portfilo site on my <a href="https://github.com/IsaacRazabi/Portfolio">Git</a> page.</p>
<p>@Issac Razbi</p>
  </section>
</template>

<style scoped>
.footer-container{
  display: flex;
  justify-content: center;
  bottom: 0;
}
@media (max-width: 750px) {
.footer-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  bottom: 0;
}
}
</style>