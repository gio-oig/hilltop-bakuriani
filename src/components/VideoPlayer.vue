<template>
  <div id="video-container" :class="{ shrinked: isShrinked }">
      <div class="innter-container">
        <div id="conteiner-controller">
            <img v-if="!isShrinked" @click="changVideoView()" src="@/assets/material-close.svg" alt="">
            <img v-if="isShrinked" @click="changVideoView()" src="@/assets/max.svg" alt="">
        </div>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
  </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
    data() {
        return {
            isShrinked: false,
        }
    }, 
    methods: {
        changVideoView() {
            this.isShrinked = !this.isShrinked
        }
    }
}
</script>

<style>
    #video-container {
        position: absolute;
        padding: 10px;
        top: 235px;
        right: 175px;
        width: 600px;
        height: 350px;
        z-index: 5;
        transition: all 0.3s ease-in-out;
        background: #fff;
    }
    .innter-container {
        position: relative;
        height: 100%;
        /* right: 0; */
    }
    
    iframe {
        border: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #conteiner-controller {
        position: absolute;
        right: 15px;
        top: 12px;
        cursor: pointer;
    }

    #conteiner-controller img {
        width: 15px;
        height: 15px;
    }

    #video-container.shrinked {
        width: 200px;
        height: 150px;
        top: 6rem;
        right: 2rem;
    }
    @media (max-width: 1300px) {
        #video-container {
            width: 400px;
            height: 250px;
        }
    }

    @media (max-width: 800px) {
        #video-container {
            display: none;
        }
    }
</style>