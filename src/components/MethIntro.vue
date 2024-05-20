<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">Methodology, Findings and Evaluation</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Interviews: Methodology and Findings</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure11.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Note: Adapted from UX Booth (2016). Designing With Human Centered Usability Standards.</p>
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
        introduction: `This chapter outlines the research process, conducted through an iterative, user-centred approach that aligns with the ISO 9241-210 standard for human-centred design (Jacobsen & Meyer, 2022). The ISO 9241-210 standard outlines principles and activities that aim to make a system more usable, focusing on optimising the user's experience and ensuring that user needs and limitations are at the forefront throughout the design and development process.
        `,
        text2: `The methodology employed in this research involved a cyclical process of interviews, data analysis, prototype implementation, and user testing. Each cycle aimed to refine the research focus and improve the prototype based on real-world user feedback and needs. This approach ensures that the research is both targeted and expansive, offering a comprehensive understanding of the user experience in the realms of note-taking, technology, and AI.
Each subchapter in this chapter is structured to reflect one iteration of this cycle, encompassing the methodology, findings, and evaluation for either an interview session or a prototype test. The findings section will present the data and insights gathered, and the evaluation section will offer a critical assessment of these findings, discussing their implications and suggesting future directions for research. This structure allows for a detailed, step-by-step understanding of how each iteration contributed to the research objectives.
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
  