<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Zettelkasten by Niklas Luhmann</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure7.jpg" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Note: Schmidt (2014). Zettelkasten of Niklas Luhmann in 1998 in Oerlinghausen. Niklas Luhmann Archiv. CC-BY-NC-SA 4.0.</p>
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
        introduction: `The Zettelkasten method, conceived by Niklas Luhmann, is a sophisticated system for knowledge management that involves creating "Zettels," or atomic notes, for individual pieces of information (Tietze, 2013). Each Zettel is a self-contained unit of knowledge but is also linked to other Zettels, forming a complex, interconnected web. The links between Zettels are not merely hierarchical but associative, allowing for a multi-dimensional information organisation. This interconnectedness enables users to follow a trail of thought or inquiry in multiple directions, much like a neural network (Schmidt, 2014).
        `,
        text2: `In practice, Zettels can be used to build upon existing knowledge. When a new piece of information is encountered that is related to a topic with an existing Zettel, it can be linked to the existing Zettel. This creates a dense network of interconnected ideas, theories, and data points over time. The Zettelkasten method thus allows for the incremental building of a knowledge base, where each new Zettel enriches the existing network.
For this thesis, the Zettelkasten method is particularly relevant as it embodies the principle of interconnectedness in a tangible form. It provides a working model for organising, linking, and building on complex sets of information to facilitate both depth and breadth of understanding. The method's emphasis on associative linking offers a practical approach to the theoretical concept of interconnectedness, making it a valuable case study for this project.
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
  