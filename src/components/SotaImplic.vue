<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Implications for the Project</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure9.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Key implications for the project from the visualisation research</p>
          </div>
        </div>
      </section>
  
      <!-- Text2 Section -->
      <section class="mb-6">
        <div class="text-grid" v-html="formattedText2"></div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChapterIntroduction',
    data() {
      return {
        introduction: `The insights gained from the theories and methods presented in this chapter are essential for the project's design and implementation. The focus lies on interconnectedness, user-centric design, and data visualisation. The findings are depicted in the following image - Dynamic Knowledge Landscape, Holistic Visualisation, and Granularity with Connectivity - demonstrate the project's alignment with its objectives.
The incorporation of these ideas aims to create a theoretically stable, effective, and adaptive tool for efficiently managing and visualising interrelated data. The system is intended to help nodes grow organically, adapt to new inputs, and evolve over time.
<br /> 
More specifically it tries to offer a multi-dimensional organisation with a depth and breadth of information via bi-directional links between nodes. This strategy assures a user-centric emphasis by providing practical solutions that promote knowledge management and data visualisation. 
        `,
        text2: `
        `,
      };
    },
    computed: {
      formattedIntroduction() {
        return this.introduction.replace(/\n/g, '<br />');
      },
      formattedText2() {
        return this.text2.replace(/\n/g, '<br />');
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
  