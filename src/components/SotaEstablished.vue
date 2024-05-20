<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Established Concepts and Practises</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure6.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Simple hypertext visualisation</p>
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
        introduction: `The technical evolution has immensely affected how we organise, access, and even conceptualise information (Mutsaers et al., 1998). Various techniques have been created, to solve the new challenges. Each takes a different approach, but they all centre on the interconnection of information. This idea is a structural feature as well as a cognitive tool. It allows for networked thinking, in which accessing one piece of knowledge leads discovering related concepts. This improves comprehension and problem-solving abilities (Alhadad, 2018). 
Each methodology provides a distinct viewpoint on interconnectedness. They assist users in creating structures that expose the underlying connections between data components. This thesis intends to demonstrate how to use connections for improved knowledge management by examining these.
<h4>Hypertext</h4> The term "hypertext" was coined by Ted Nelson in the 1960s, as discussed in Smith & Weiss (1988). Its conceptual foundation can be traced back to Vannevar Bush's idea of "the memex" in 1945. This device was designed to emulate the associative structure of human memory (Vannevar Bush, 1945). Unlike traditional, linear documents, hypertext enables a complex, networked organisation of information. Each node in this network can store various data types, ranging from text and graphics to audio and video. As a result, hypertext becomes an interactive and dynamic tool for discovering information (Smith & Weiss, 1988). Hypertext has transformed the way we handle and interact with information in digital contexts. It enables real-time updates and dynamic linking, making it a foundational internet technology. Because of its adaptability and flexibility, its uses have expanded beyond online browsing to academic research, software development, and other industries requiring difficult information management.
        `,
        text2: `In the context of this thesis, hypertext is a key example of how interconnectedness can be used for effective knowledge management. Its non-linear, dynamic structure provides a paradigm for organising and linking similar pieces of information. It contains the interrelated proposals that this thesis seeks to investigate and provides a practical framework for the various approaches presented.
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
  