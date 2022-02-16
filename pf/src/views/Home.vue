<template>
  <div class="home">
    <img class="lock" alt="Vue logo" src="../assets/lock.svg">
    <img class="logo" alt="Vue logo" src="../assets/logo.svg">
    <h2>product designer</h2>
    <CodeLock/>
    <p>private portfolio — reach me to see excerpt of my work</p>
    <Social/>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeLock from '@/components/CodeLock.vue'
import Social from '@/components/Social.vue'


export default {
  name: 'Home',
  components: {
    CodeLock,
    Social
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
</style>