<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">State of the Art</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Exploring Artificial Intelligence</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
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
        introduction: `Following the rapid advancements in AI, understanding its operations and applications is important. Artificial Intelligence is designed to emulate human intelligence. It enables machines to learn, adapt to new inputs, and execute tasks usually requiring human intellect (Martie et al., 2023). One significant branch of AI is Natural Language Processing (NLP). NLP allows AI to understand and generate human language. It acts as a conduit between humans and computers, facilitating more intuitive interactions.

Take the educational sector as an example. In this case, AI using NLP can examine a large number of course reviews. It discerns student sentiments and organises feedback into distinct topics, such as the quality of course content or instructor performance. This process employs advanced models like BERT and RoBERTa. These models explore the contextual meanings of words, providing a nuanced understanding of text (Koufakou, 2023).
        `,
        text2: `NLP involves various techniques. Sentiment analysis is one, determining the emotional tone behind words to gain an understanding of the attitudes, opinions, and emotions expressed. It classifies the sentiments in the text as positive, negative, or neutral. Another technique, named entity recognition, identifies and categorises entities in the text, such as names of persons, organisations, or locations.
Additionally, keyword search and topic modelling are also integral components of NLP. They enable AI to filter through textual data, extract pertinent information, and identify patterns. These techniques can also be used to visualise the derived insights. Thus, AI is not merely a conceptual framework. It is a practical tool actively used to extract meaningful insights from textual data, reshaping our interaction and understanding of information (Koufakou, 2023).
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
  