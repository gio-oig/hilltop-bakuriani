<template>
  <navbar/>
  <div class="hero">
    <main-slider/>
    <video-player/>
  </div>
  <room-types/>
</template>

<script>
import MainSlider from './components/MainSlider.vue'
import Navbar from './components/Navbar.vue'
import RoomTypes from './components/RoomTypes.vue'
import VideoPlayer from './components/VideoPlayer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MainSlider,
    VideoPlayer,
    RoomTypes
  }
}
</script>

<style>

@font-face {
  font-family: "Larsseit";
  src: local("Larsseit"),
   url(./fonts/Larsseit-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Big Calson";
  src: local("Big Calson"),
   url(./fonts/Big-Caslon-Medium.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%
}

#app {
  font-family: 'Montserrat', sans-serif;
  max-width: 1920px;
  margin: auto;
  background-color: rgb(80, 80, 80);
  min-height: 500vh;
}

.hero {
  position: relative;
}
</style>
