<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Second Brain by Tiago Forte</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Subtitles and Lists -->
      <section class="mb-6">
      <ul class="list-disc list-inside">
        <li class="mb-1">The Gardener: This personality cultivates ideas, allowing them to grow organically and connect. They maintain a dynamic knowledge ecosystem.</li>
        <li class="mb-1">The Architect: Architects carefully structure their knowledge, creating frameworks and systems. They prioritise order and hierarchy.</li>
        <li class="mb-1">The Librarian: This type focuses on cataloguing and organising information for easy retrieval and access.</li>
        <li class="mb-1">The Student: This group is still in the process of developing a distinct style and serves more as a utility category (Forte, 2022).</li>
      </ul>
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
        introduction: `iago Forte's Second Brain methodology serves as an external digital repository for ideas and insights. The system operates on a four-step process known as CODE: Capture, Organise, Distil, and Express (2023a). For instance, imagine a research paper on hypertext. The key points are captured in a digital note, which is then organised by tagging it under categories like "Hypertext Studies" or "Digital Information Management." Over time, these notes are reviewed and distilled into their most essential forms, perhaps summarising the key findings of the hypertext paper. Finally, the distilled information is expressed in a new Zettel, integrating these findings with other related research, possibly leading to a thesis chapter on hypertext.
<br />Forte uses 3 note-taking styles from Le Cunff (2020) and adds the student to them:
        `,
        text2: `While these personalities are not directly integrated into this project, they will be used for analysing interviewees to understand their information management styles. The Gardener approach is especially relevant to this project because it emphasizes the organic growth and interconnectedness of ideas, which aligns closely with the project's objectives. The Student category serves as a placeholder for those still developing their information management style. The Second Brain's CODE methodology is particularly useful for this project, offering a structured yet flexible approach to transforming raw data into actionable insights (Forte, 2023b).
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
  