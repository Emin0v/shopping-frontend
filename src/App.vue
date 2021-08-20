<template>
    <Header></Header>
    <Slider></Slider>
    <Section></Section>
    <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Section,
    Footer
  }
}
</script>

<style>

</style>
