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
  head: {
    metaInfo: {
      meta: [
        { name: 'theme-color', content: '#292929' }
      ]
    }
  }
}
</script>

<style>
.v-application .v-progress-circular__indeterminate .v-progress-circular__determinate {
  stroke: dark;
}

#defaultCanvas0{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

}
*{
  margin: 0;
  padding: 0;
  text-align: left;
  
}
@font-face {
  font-family: 'Klarna';
  src: url('~@/assets/Klarna Headline Light.woff2.ttf') format('truetype');
  font-weight: light;
  font-style: light;
}
@font-face {
  font-family: 'Klarna';
  src: url('~@/assets/Klarna Headline Bold.woff2.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Blender';
  src: url('~@/assets/Blender-BOOK Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;
  width: 100%;
  z-index: 300;
  margin-top: 10vh;

  
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
