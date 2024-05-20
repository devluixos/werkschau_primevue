<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">Introduction</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Research Gap and Research Question</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChapterIntroduction',
    data() {
      return {
        introduction: `Data visualisation serves as a bridge between the complexities of raw data and human comprehension. By converting intricate data into visual formats, we enhance our ability to interpret and derive insights from it. Visual representations, such as charts, graphs, and info-graphics, allow us to see patterns, trends, and anomalies that might be difficult to discern in textual or tabular formats (Tufte, 2007). On the other hand, artificial intelligence serves as a reference for data analysis. With its advanced algorithms and machine learning capabilities, AI can sift through massive datasets, identifying patterns and relationships that might elude human analysts (OpenAI, 2023). While both visualisation and AI individually offer immense value, their combined potential in the field of data interpretation remains relatively uncharted. There is an emerging synergy between AI's analytical prowess and the intuitive clarity of visual data representation, but this intersection has yet to be fully explored and optimised (Isenberg et al., 2011).
        
        To gain a better perspective about this issue, the current and desired situation has been analysed:
        <br />
        <strong>Current situation:</strong> Despite the advancements in data visualisation techniques, users still struggle with understanding and drawing meaningful connections from the broad expanse of textual data.
        <strong>Desired situation:</strong> Users can effortlessly navigate and comprehend textual data, gleaning insights from AI-powered visualisations that display connections, patterns, and deeper meanings.
        Bridging this gap necessitates a deeper exploration, leading to the central research question:
        <br />
        <em>'How can the visualisation of connections between bits of information be enhanced in a meaningful way using artificial intelligence?'</em>
        <br />
        Addressing this question has the potential to reshape our relationship with data. To comprehensively tackle this, the following sub-questions are posed:
        I) How can the design of AI-driven visualisations be optimised to effectively represent connections within textual data?
        II) What are the functional elements and design principles that enhance interpretability from complex visualisations?
        The following sections will examine data visualisation's current state, discover AI's transformational potential, and investigate these pressing questions.`
      };
    },
    computed: {
      formattedIntroduction() {
        return this.introduction.replace(/\n/g, '<br />');
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
  