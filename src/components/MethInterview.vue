<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">Methodology, Findings and Evaluation</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Methodology, Findings and Evaluation</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure12.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Honeycomb model and each facet customised for this project</p>
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
        introduction: `The interviews were conducted online, each lasting between 30 to 45 minutes, using a semi-open format. This approach combined structured, predetermined questions with the flexibility for open-ended discussions. The structured questions were designed to touch upon each facet of the User Experience Honeycomb model (UXPin, 2022), which includes:
        `,
        text2: `This model served as a guiding framework to ensure a comprehensive understanding of the user experience, particularly in the realms of note-taking, technology, and AI.
            <strong>Objectives</strong>
The primary objectives of the interviews were:
    • To understand the strategies employed by individuals for taking notes and how these notes are used post-creation.
    • To identify the types of tools, platforms, and software used in the note-taking and data management process.
    • To explore the challenges and limitations individuals face in their current note-taking methods.
    • To assess the participant’s openness to the use of AI in note-taking and data management.
The four participants for these interviews were carefully selected from a diverse student body, representing various academic fields. This selection strategy was intentional, aiming to capture a broad spectrum of experiences and perspectives on note-taking, technology use, and attitudes toward AI. To ensure the accuracy and reliability of the data collected, all interviews were recorded and transcribed. These transcriptions were then analysed to identify common themes, challenges, and opportunities, which subsequently informed the design and development of solutions.

It's worth noting that the interviews had their limitations. The scope was confined to the participant’s experiences in academic settings and their interactions with AI, which were considered during the analysis phase to contextualise the findings appropriately.
The insights gained from these interviews serve as foundational data for the development of the first prototype. The plan is to engage the same interviewees, along with additional participants, in the testing and validation of this prototype, thereby ensuring continuity and reliability in the research process.

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
  