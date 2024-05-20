<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">Methodology, Findings and Evaluation</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Interview Findings</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure13.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Sentiment analysis of interview findings by category</p>
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
        introduction: `The interviews revealed diverse insights and sentiments on seven key topics from the honeycomb model. A summary table is provided bellow for a quick overview of the main themes and overall sentiments expressed by each participant.
        The displayed graph shows the interview findings. The x-axis represents the participants, while the y-axis quantifies the amount of mentions each topic. Each participant's bar is segmented into colour-coded sections, representing one of the seven key topics.
        `,
        text2: `The displayed graph shows the interview findings. The x-axis represents the participants, while the y-axis quantifies the amount of mentions each topic. Each participant's bar is segmented into colour-coded sections, representing one of the seven key topics. 

The research unveiled a spectrum of insights related to note-taking, technology, and AI. Participants demonstrated diverse note-taking strategies, ranging from digital to handwritten notes, underscoring the need for versatile solutions. There was a universal openness to embracing technology, but the extent and type of its application varied widely among participants.
While the potential benefits of AI were recognised, there was a palpable level of scepticism and concerns about its reliability and ethical ramifications. These concerns are reflective of broader societal attitudes toward AI, which future technological solutions must address. Different organisational and storage strategies were employed by participants, suggesting a demand for robust and customisable organisational features in any prospective solution.
Accessibility emerged as a pivotal issue, encompassing not just the ease of initial storage but also the long-term retrieval and archiving of notes. Cloud storage was a common solution but was not universally used, with data security being a significant concern. The varying levels of comfort and familiarity with technology among participants could potentially introduce bias in the findings, emphasising the need for solutions that are inclusive and cater to different levels of tech-savviness.
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
  