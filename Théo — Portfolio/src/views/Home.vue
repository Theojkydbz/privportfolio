<template>
  <div id="homee" class="home">
    <img class="lock" alt="Vue logo" src="../assets/lock.svg">
    <img class="logo" alt="Vue logo" src="../assets/logo.svg">
    <h2>product designer</h2>
    <CodeLock/>
    <p>private portfolio — ma reach me to see excerpt of my work</p>
    <Social/>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeLock from '@/components/CodeLock.vue'
import Social from '@/components/Social.vue'


export default {
  name: 'Home',
  title: 'Théo — Portfolio',
  components: {
    CodeLock,
    Social
  },
  mounted() {
    document.getElementById("homee").classList.add('show');
  }
}
</script>

<style lang="css" scoped>
.home{
  display: flex;
  flex-direction: column;
}
img{
  margin: auto;
  padding: 7px;
}
.lock{
  width:35px;
  margin-bottom: 15px;
}
.logo{
  width:110px;
}
h2{
margin-top: 2px;

font-size: 1.8rem;
font-family: Fraunces;
font-style: 100;
font-weight: 300;
text-align: center;

color: #E05151;
}
p{
  font-family: Fraunces;
  font-weight:200;
}


@keyframes example {
  0%   {-webkit-opacity: 0%;-webkit-transform: scale(0.7)}
  50%  {-webkit-opacity: 0%;-webkit-transform: scale(0.9)}
  100% {-webkit-opacity: 100%;-webkit-transform: scale(1)}
}
#homee.show{
  display: flex;
  animation-name: example;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
</style>