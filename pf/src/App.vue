<template>
   <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    document.getElementById("app").classList.add('show');
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@100;200;300;400;500;600;700;800;900&display=swap');
html{
  background-image: url("./assets/bg.png");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 20vh;
  
}
@keyframes example {
  0%   {opacity: 0%;transform: scale(0.7)}
  50%  {opacity: 0%;transform: scale(0.9)}
  100% {opacity: 100%;transform: scale(1)}
}
#app.show{
  display: block;
  animation-name: example;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
