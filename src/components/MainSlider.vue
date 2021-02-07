<template>
<div class="slider-wrapper">
 <vueper-slides autoplay fade :touchable="false" fixed-height="100vh">
  <vueper-slide v-for="(slide, i) in slides" :key="i"  :title="slide.title" :image="slide.image" :content="slide.content" />
</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'MainCarisel',
  data() {
      return {
        slides: [
            {
                title: 'Slide #1',
                content: 'Slide content.',
                image: require('@/assets/images/slider-room4.jpg')
            },
             {
                title: 'Slide #2',
                content: 'Slide content2.',
                image: require('@/assets/images/slider-room2.jpg')
            },
            {
                title: 'Slide #3',
                content: 'Slide content3.',
                image: require('@/assets/images/slider-room3.jpg')
            },
            {
                title: 'Slide #4',
                content: 'Slide content4.',
                image: require('@/assets/images/slider-room.jpg')
            }
        ]
      }
  },
  components: {
    VueperSlides,
    VueperSlide
  },
};
</script>

<style>
.slider-wrapper {
    /* width: 50%; */
    /* background: red; */
}

.vueperslide__content-wrapper {
    /* display: block !important; */
    position: absolute;
    left: 5rem;
    bottom: 10rem;
    justify-content: flex-end !important;
    align-items: start !important;
}
.vueperslide__title {
    text-align: left;
    font-size: 5rem;
    color: #fff;
}
.vueperslide__content {
    font-size: 3rem;
    color: #fff;

}

.vueperslide {
/* background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)) */
}
</style>