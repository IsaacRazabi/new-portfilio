<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

#app{
    display: flex;
    align-items: center;
    justify-content: center;
    //  font-family: Roboto, Helvetica, Arial, sans-serif;
}
html {
    font-family: Montserrat, sans-serif;
    line-height: 1.6;
}

body {
    margin: 0;
    
    background-size: 300px;
    background-attachment: fixed;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem;
    font-family: GreatVibes, serif;
    font-weight: 400;
}

h1 {
    font-size: em(46px);
}

p {
    margin: 0 0 1rem;
    // max-width: 42ch;
}

img {
    width: 100%;
}
</style>
