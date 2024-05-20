<template>
    <div class="chapter">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <div v-if="images && images.length" class="images">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChapterTemplate',
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        required: false,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  .chapter {
    padding: 20px;
  }
  .images img {
    max-width: 100%;
    height: auto;
  }
  </style>
  