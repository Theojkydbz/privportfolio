<template>
  <div id="homee" class="home">
    <div class="card1">
      <div class="introcard">
        <div class="name">
          <h1>Théo Geiller</h1>
          <h2>Product design</h2>
        </div>
        
        <p>Eager to join a team developing next-gen products and solutions.</p>    
      </div>
      <Social/>
      </div>
      <div class="card2">
        <img class="locker" src="@/assets/lock.svg" alt="">

      <h1>private portfolio</h1>
      
      <CodeLock/>
      <Access/>
      <div class="close">
        <p>reach me to see exerpt of my work</p>
        <p>t.geiller@lecolededesign.com</p>
      </div>
    </div>
    
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
img.locker{
  width: 2rem;
}
.card2{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 34px 34px;
  gap: 16px;

  width: 300px;

  background: #FFFFF7;
  border: 1px solid #F4F4E6;
  border-radius: 12px;
  
  margin: auto;
}
.card2 *{
  text-align: center;
  width: 100%;
}
.card2 p{
  font-size: 0.9em;
  line-height: 1.2em;
  
}
.card1{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 34px 34px;
  gap: 16px;

  width: 300px;

  background: #FFFFF7;
  border: 1px solid #F4F4E6;
  border-radius: 12px;
  
  margin: auto;
  margin-top: 50px;
  margin-bottom: 1vw;
}
.introcard{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
}
.name{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}

.home{
  display: flex;
  flex-direction: column;
}
img{
  margin: auto;
  padding: 7px;
}
.logo{
  width:110px;
}
h1{
font-family: 'Klarna';
font-style: bold;
font-weight: 700;
font-size: 21px;
}
h2{

font-family: 'Klarna';
font-style: light;
font-weight: 300;
font-size: 17px;
}
p{
  font-family: 'Blender';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 23px;
  width: 100%;
}

@media only screen and (max-width: 750px) {
  .card2{
    width: auto;
    margin: 5vw;
    margin-top:0;
  }
  .card1{
    width: auto;
    margin: 5vw;
    margin-top: 0px;
  }

  h2{
    font-size: 1.2rem;
  }
  p{
    font-family: 'Blender';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2em;
    line-height: 23px;
    width: 90%;
  }

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