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
            <img src="/images/Figure3.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Overview of the risks</p>
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
        introduction: `The project is designed to align with the needs of individuals who not only work with text but also need to extract and synthesise knowledge from various sources. This focus shapes the project's goals, ethical considerations, and inherent risks.
The extended project aims to be financially accessible, especially for students, by utilising free APIs or frameworks for text analysis. While the ambition is to innovate text-based data visualisation, the current scope does not include multimedia elements like videos and images, which require different tools and methodologies. Ethically, the project is grounded in the current and foreseeable advancements in AI technology, striving to offer feasible and relevant solutions today.`,
        text2: `Navigating the landscape of this project comes with its share of risks. On the technical side, issues like development roadblocks, hardware or software malfunctions, and infrastructure unavailability could pose challenges. Financially, the project could be impacted by fluctuations in tokenised service prices or limited budgeting opportunities. From the user experience standpoint, risks include a potential lack of accessibility and a steep learning curve that may discourage user engagement. External issues such as changes to laws regulating the usage of AI and business trends towards the privatisation of public information could potentially have an impact on the project's viability. 
Personal risks include knowledge gaps such as unfamiliarity with specific APIs, untested AI text analysis methodologies, and restricted web development skills. Potential conflicts of interest, such as financial losses, academic deadlines, and ethical considerations, could influence the project's trajectory.
To address these risks, targeted learning and consultations will fill the expertise gaps in web technologies, unknown APIs, and AI handling. 
The prices of the different AIs and their tokenisation will be closely monitored. 
Transparency and ethical guidelines will prevent conflicts of interest. An ethical analysis is presented in Chapter Ethical Considerations with AI  to clarify any conflicts. These measures are intended to reduce risks and contribute to the project's success.`,
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
  