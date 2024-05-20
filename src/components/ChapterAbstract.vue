<template>
  <div class="chapter p-4">
    <!-- Main Title -->
    <h1 class="text-3xl font-bold mb-4">Introduction</h1>

    <!-- Introduction Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-3">Problem Space</h2>
      <div class="text-grid">
        <p>{{ introduction }}</p>
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
export default {
  name: 'ChapterIntroduction',
  data() {
    return {
      introduction: `TextSight looks into the use of artificial intelligence to visualise the connections between bits of information. It addresses the practical interpretation of large amounts of textual data. The central research question asks how AI-driven insights can improve the visualisation of interconnected information. The focus lies on user-centric design methodologies. The thesis research branches out into existing visualisation studies, AI models and their applications. It also includes ethical considerations and technical challenges such as data privacy and bias.
The project followed a user-centred iterative approach that started with interviews and multiple rounds of prototype creation, improvement and testing. Multiple visualisation options were developed to explore the possibilities further. Interviews, paper prototypes and card sorting were among the methodologies used to gather stakeholder insights.
A key discovery is the implementation of a probability score. This score measures the interconnectedness of texts, which will aid in developing user-centred filters and specifications. The findings focus on the importance of aligning technical possibilities with user preferences by enabling the user to customise and personalise the visualisations to support more user-specific needs.
The goal of this project is to change how users handle and navigate through data by providing a system that can offer a holistic overview while allowing to dynamically filter and zoom into specific topics for the desired use case.`,
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
  margin-bottom: 1rem; /* Added to ensure spacing between paragraphs */
}
.text-grid {
  column-count: 1;
  margin-top: 0px;
}
.text-block {
  break-inside: avoid;
  margin-top: 0px;
}
.text-grid p {
  margin-top: 0; /* Remove top margin for paragraphs in text-grid */
}

@media (min-width: 768px) {
  .text-grid {
    column-count: 2; /* Two columns for medium screens */
  }
}

@media (min-width: 1024px) {
  .text-grid {
    column-count: 3; /* Three columns for large screens */
  }
}
.text-gray-500 {
  color: #6b7280;
}
</style>






