<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>


        <!-- Image Section -->
        <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
            <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure5.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">MacEachren's Cartography Cube: A Tool for Dynamic Mapping</p>
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
        text2: `This offers a relevant framework for this thesis, particularly for visualising the interconnectedness of textual data. It emphasises the importance of user interaction, data complexity, and representation, which aligns with the project's goals. The cube's dimensions can guide the design of visualisations that allow users to explore and understand the intricate relationships between different bits of information. Rather than presenting a static image, the cube encourages the development of a dynamic tool that users can interact with to uncover new insights and connections. This makes it an invaluable model for creating informative and engaging visualisations.
        <br />
John Tukey's emphasis on exploratory data analysis underscores the value of visualisation in the early stages of data analysis. He promotes a more intuitive understanding of data before formal modelling. Turkey suggests visuals can guide the analytical process, helping users discern patterns, trends, and outliers. Tukey's approach supports the idea that visualisation is not just a presentation tool but an essential part of the analytical journey (Tukey, 1977).
Tukey's emphasis on exploratory data analysis will inform the project's initial stages, guiding users to identify key patterns or anomalies in their data sets. This early insight can shape subsequent, more detailed analyses, making the entire process more targeted and efficient.
Through these visualisation insights, the following concepts will be used in this project: <br />
<strong>User-Centric Design:</strong> Building on Shneiderman's "Task by Data Type Taxonomy", this project will employ user testing to determine the most effective ways to visualise and structure data. Multiple iterations will be conducted to refine the visualisations, ensuring they are intuitive and tailored to the tasks users aim to perform.
<strong>Clarity vs. Immersion:</strong> While Tufte's principles advocate for minimalism to avoid "chart junk", this project faces a unique challenge. Given its focus on connecting information through AI text analysis, the visualisations may include numerous new links. Additionally, as a design thesis, there is an artistic element aimed at creating visually pleasing representations. Striking a balance between clarity and immersion, artistic visuals will be a critical design consideration.
<strong>Context and Interaction:</strong> Inspired by MacEachren's emphasis on interactivity, the project will feature filters that allow users to overlay different types of data, such as sentiment or named entities. These interactive "overlays" aim to enhance user engagement and provide a more contextual understanding of the visualised data.
<strong>Exploratory Analysis:</strong> Aligning with Tukey's emphasis on the importance of exploratory data analysis, the project will incorporate filtering options within the visualisations and in the application interface. These filters will allow users to select or ignore specific data types or entities, allowing for a more targeted and exploratory approach to data analysis.
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
  