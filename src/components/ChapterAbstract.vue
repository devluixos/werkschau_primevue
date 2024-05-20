<template>
  <div class="chapter p-4">
    <!-- Main Title -->
    <h1 class="text-3xl font-bold mb-4">Introduction</h1>

    <!-- Introduction Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-3">Problem Space</h2>
      <div class="text-grid">
        <div v-for="(block, index) in textBlocks1" :key="index" class="text-block">
          <p>{{ block }}</p>
        </div>
      </div>
    </section>

      <!-- Subtitles and Lists -->
    <section class="mb-6">
      <h3 class="text-xl font-medium mb-2">Keywords</h3>
      <ul class="list-disc list-inside">
        <li class="mb-1">Artificial intelligence</li>
        <li class="mb-1">Data visualisation</li>
        <li class="mb-1">User-centric design</li>
        <li class="mb-1">Text analysis</li>
        <li class="mb-1">Interconnectedness</li>
      </ul>
  </section>
  </div>
</template>

<script>
import { splitText, mergeText } from './textUtils'; // Updated import statement

export default {
  name: 'ChapterAbstract',
  data() {
    return {
      introduction: `Abstract
TextSight looks into the use of artificial intelligence to visualise the connections between bits of information. It addresses the practical interpretation of large amounts of textual data. The central research question asks how AI-driven insights can improve the visualisation of interconnected information. The focus lies on user-centric design methodologies. The thesis research branches out into existing visualisation studies, AI models and their applications. It also includes ethical considerations and technical challenges such as data privacy and bias.
The project followed a user-centred iterative approach that started with interviews and multiple rounds of prototype creation, improvement and testing. Multiple visualisation options were developed to explore the possibilities further. Interviews, paper prototypes and card sorting were among the methodologies used to gather stakeholder insights.
A key discovery is the implementation of a probability score. This score measures the interconnectedness of texts, which will aid in developing user-centred filters and specifications. The findings focus on the importance of aligning technical possibilities with user preferences by enabling the user to customise and personalise the visualisations to support more user-specific needs.
The goal of this project is to change how users handle and navigate through data by providing a system that can offer a holistic overview while allowing to dynamically filter and zoom into specific topics for the desired use case.`,
    }
  },
  computed: {
    textBlocks1() {
      const chunkSize = this.calculateChunkSize();
      return this.splitOrMergeText(this.introduction, chunkSize);
    },
    textBlocks2() {
      const chunkSize = this.calculateChunkSize();
      return this.splitOrMergeText(this.text2, chunkSize);
    }
  },
  methods: {
    calculateChunkSize() {
      // Adjust chunk size based on screen width
      const width = window.innerWidth;
      if (width < 768) return 100;
      if (width < 1024) return 50;
      return 25;
    },
    splitOrMergeText(text, chunkSize) {
      const width = window.innerWidth;
      if (width < 768) {
        return mergeText(text, chunkSize);
      } else {
        return splitText(text, chunkSize);
      }
    }
  }
}
</script>

<style scoped>
.chapter {
  font-family: 'Arial', sans-serif;
}
h1, h2, h3 {
  color: #333;
}
p {
  color: #555;
  line-height: 1.6;
}
.text-grid {
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 10px;
}
.text-block {
  margin-bottom: 2rem; /* Increase the space between text blocks */
  margin-right: 10px;
}

@media (min-width: 768px) {
  .text-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .text-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.text-gray-500 {
  color: #6b7280;
}
</style>


  

