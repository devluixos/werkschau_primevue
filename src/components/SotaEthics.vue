<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Ethical Considerations with AI</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure10.jpg" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Ethical and legal conundrums involved with the usage of artificial intelligence</p>
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
        introduction: `Developing AI-powered textual visualisations necessitates a save approach to ethical considerations. It is crucial to integrate ethical mindfulness, fairness, and interoperability considerations seamlessly to mitigate potential issues effectively.
        `,
        text2: `The emphasis in the field of ethical mindfulness is on data anonymisation and privacy. The removal or anonymisation of personally identifiable information is a non-negotiable prerequisite, ensuring user privacy and preventing any potential trace back from the visualised data (Imperva, 2023; Naik et al., 2022). Alongside, obtaining explicit user consent before any data collection or processing is imperative. Users must be fully informed about the purpose and handling of their data, maintaining a transparent approach and providing clear documentation on how the AI processes and visualises the data (Naik et al., 2022).
Addressing bias and ensuring fairness are also paramount. Training AI models on diverse datasets reduces inherent biases while also ensuring representation from a variety of sources, cultures, and demographics. The utilisation of specialised tools to detect and address biases in data processing and representation is important, as is allowing user feedback on visualisations to identify and correct areas where bias may be inadvertently introduced.
The project acknowledges the limitations imposed by reliance on external AI services. While addressing these ethical and interoperability considerations is crucial, the scope to address them comprehensively within this project is constrained. These considerations have been noted, and every effort will be made to keep them in mind throughout the project in order to balance the transformational benefits of AI with the ethical and practical challenges they present. The project aims to navigate these considerations effectively, ensuring the responsible development and deployment of AI-powered textual visualisations.
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
  