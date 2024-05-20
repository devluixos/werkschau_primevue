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

        <!-- Image Section -->
        <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
            <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure2.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Stakeholder map with human and non-human stakeholders</p>
            </div>
        </div>
        </section>

        <!-- Text2 Section -->
        <section class="mb-6">
        <div class="text-grid">
            <p>{{ text2 }}</p>
        </div>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChapterIntroduction',
    data() {
      return {
        introduction: `In order to further understand the project's direction, it is crucial to understand the needs and pain points of the stakeholders. These stakeholders - students, educators, researchers, professionals and frequent writers - are selected based on their intricate relationship with information, particularly textual data. They are all engaged with synthesising and making sense of various forms of information.`,
        text2: `Students, often operating on limited budgets, navigate a complex academic landscape filled with articles, videos, and interactive platforms. One of the biggest obstacles they have to overcome is making sense of all this data and obtaining useful insights for research without breaking the bank.
In the academic setting, educators act as guides, helping students and researchers through the maze of available material. Their task is to effectively assist students in navigating and analysing this knowledge, allowing them to create meaningful connections between disparate information.
Researchers stand at the forefront of knowledge creation. Their work involves not just the consumption but also the synthesis of information from diverse sources. This includes scholarly articles and raw experimental data. The need for tools that can assist in visualising and interpreting this complex landscape is a constant requirement, particularly in the context of academic research or personal knowledge management.
Professionals, such as project managers, face unique challenges. Their roles often require making decisions based on extensive, multidisciplinary research. The ability to effectively visualise and integrate every piece of information into their project strategy is not an option but a necessity.
Frequent Writers include individuals like bloggers, business analysts, and technical writers. They distil large volumes of information into coherent narratives or reports. Tools that aid in organisation and visualisation are invaluable to them as they juggle multiple writing tasks requiring quick combination and display of information.

The importance of identifying these stakeholders arises from their potential to influence the project's direction and impact. For example, student’s price sensitivity could drive a use case for a free-to-use application, whereas researchers and professionals needs could shape functions that aid in research or personal knowledge management.
In summary, the stakeholder landscape is diverse but shares core challenges around the effective visualisation of textual data. Addressing these challenges is pivotal for shaping the project's direction and ensuring its impact.`,
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
  