<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Theory of Visualisation</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure4.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Adapted from Raj (2022). Data-ink Ratio Explained With Example. Copyright 2023 by Code Conquest.</p>
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
        introduction: `This chapter deals with the state of data visualisation and knowledge management, laying the theoretical groundwork for the project. It dives into fundamental themes from foundational works such as Edward Tufte's visual clarity recommendations (Tufte, 2007) and Niklas Luhmann's Zettelkasten technique for interconnected knowledge (Schmidt, 2014). These theories inform the project's design philosophy and user interaction methodology. Furthermore, the chapter investigates the function of artificial intelligence in improving text analysis and visualisation. The project attempts to innovate in ways that are both theoretically founded and adapted to current requirements by comprehending these established concepts and practises.
        <br/>
        In his TED talk, David McCandless metaphorically asserted that "data is the new soil" (TED-Ed, 2012), suggesting that just as soil is a fertile ground for plant growth, data serves as the foundational layer from which meaningful visualisations can emerge. This metaphor aims to encapsulate the idea that data, when properly cultivated, can yield visualisations that reveal new patterns and connections. McCandless refers to the human eye's sensitivity to colour and shape variations as the "language of the eye," in contrast to the "language of the mind," which he describes as a collection of numbers and concepts. The metaphor illustrates how combining these two 'languages'—the visual and the conceptual—can create a powerful synergy. This relationship functions as a form of "knowledge compression", distilling complex data into digestible, dynamic visuals that can evolve and adapt over time. It is important to note that this metaphorical framework attempts to describe the process by which the brain interprets information, rather than a literal explanation.<br/><br/>
        Ben Shneiderman's contributions to the field are profound. His "Task by Data Type Taxonomy" provided a user-centric approach to visualisation. He emphasises the importance of designing visualisations based on the type of data and the tasks users aim to perform. Central to this taxonomy is the mantra "Overview first, zoom and filter, then details-on-demand." This approach suggests that users should first get a broad overview of the data, then zoom in on areas of interest, filter out unneeded information, and finally access detailed data as needed (Shneiderman, 2003).
        Adopting Shneiderman's mantra means the tool will allow users to quickly identify data trends, zoom into details, and make informed decisions without searching through irrelevant information. For example, a researcher could swiftly pinpoint relevant academic articles from a large dataset, accelerating the literature review process.<br/><br/>
        Edward Tufte's principles of clarity and simplicity in visualisation design have been foundational. He critiques the clutter, or "chart junk", that often populates visuals and introduces concepts like the data-ink ratio. This ratio emphasises minimalist designs that prioritise essential information over decorative elements. The more information a visual element can convey, the more valuable it is. It ensures that every ink drop (or pixel) conveys valuable data and is not wasted on non-data ink (Tufte, 2007).<br/><br/>
        `,
        text2: `Adhering to Tufte's principles ensures that visualisations of interconnected data are clean and focused, allowing users to quickly identify key relationships and patterns. For example, in a network diagram illustrating the connections between various academic papers, the absence of "chart junk" would allow researchers to quickly identify seminal works and understand the landscape of existing research.<br/><br/>
        Alan MacEachren's insights into cartography and geographic visualisation underscore the importance of context and user interaction. He emphasises that maps are more than just representations; they are tools for thinking. MacEachren delves into the cognitive aspects of map reading, highlighting how spatial arrangements, symbols, and colours can influence user interpretation. For example, a population density map can be overlaid with data on
        public transportation routes, allowing urban planners to identify areas needing improved transportation links. He also discusses the interactive and multidimensional nature of modern maps, allowing users to explore information layers (MacEachren, 1995).
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
  