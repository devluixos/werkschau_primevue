<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Obsidian</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure8.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Example of bi-directional linking</p>
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
        introduction: `Obsidian is a free note-taking tool that matches the project's goals, particularly its emphasis on networked thought via bi-directional links and atomic notes. While several note-taking apps were explored, Obsidian stood out due to its unique features and freeware status, which increases its accessibility for the primary stakeholders: students.
Users can create and explore intricate webs of connections between different data points thanks to the application's focus on bi-directional links. This promotes an understanding of information, where the value extends beyond individual notes up to the complex network they form. Obsidian also supports a variety of plugins and markdown features, which expands its capabilities for managing complex information.
        `,
        text2: `It's important to note that Obsidian's interconnectedness approach may present a learning curve for new users. However, the software's capabilities make it worth the investment in learning time. One avenue for this project could be the development of an Obsidian plugin. This would leverage Obsidian's existing features, avoiding the need to reinvent foundational elements and allowing for a focus on building specialised functionalities.
In summary, Obsidian serves as a dynamic knowledge base well-suited for this project. Its features, especially bi-directional links and atomic notes, align with the project's emphasis on organic growth and the interconnectedness of ideas. Its freeware status further adds to its suitability, making it a practical choice for this research (Obsidian, 2023).
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
  