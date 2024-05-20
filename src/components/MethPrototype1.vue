<template>
    <div class="chapter p-4">
      <!-- Main Title -->
      <h1 class="text-3xl font-bold mb-4">Methodology, Findings and Evaluation</h1>
  
      <!-- Introduction Section -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">Paper Prototype and Card-sorting: Methodology and Findings</h2>
        <div class="text-grid" v-html="formattedIntroduction"></div>
      </section>
  
      <!-- Image Section -->
      <section class="mb-6">
        <div class="grid grid-nogutter surface-ground justify-content-center">
          <div class="col-12 sm:col-10 md:col-8 lg:col-6">
            <img src="/images/Figure14.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
            <p class="text-sm text-gray-500 mt-1 text-center">Sentiment analysis of interview findings by category</p>
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
        introduction: `Building on the foundational insights from the interviews, this research phase employs a paper prototype coupled by a card sorting exercise. The primary aim is to provide a tactile, hands-on understanding of user interaction and cognitive processes within a rudimentary setting. The objectives include assessing how users connect texts, evaluating the perceived usefulness of potential functionalities, and gathering data on user experience through various usability metrics such as task completion rates, error rates, and user satisfaction.
            <strong>3.2.1. Objectives</strong>
The objectives set for this phase are strategically designed to inform the structure of the next prototype, serving as framework for the future development and implementation of the system.
    • Assessing Text Connections: Understanding how users connect texts is vital for designing an AI-powered system that can automate or assist in this process effectively.
    • Evaluating Functionalities: It's important to understand the perceived usefulness of potential functionalities to ensure that the system meets user needs and expectations.
    • User Experience Metrics: Gathering data on task completion rates, error rates, and user satisfaction provides quantitative measures of the system's usability.
    • Context of Use: Understanding if and how users would use such a system in their daily lives, and in what contexts, helps in tailoring the system to real-world applications.
        `,
        text2: `<strong>3.2.2. Paper Prototype and Card Sorting: Methodology</strong>
The paper prototype is a hands-on tool designed to simulate user interaction with the system. The prototype is structured into several key steps:
    1. Introduction to the Task: Users are oriented to the task, which involves connecting a set of pre-prepared texts in a meaningful way, complete with instructions and criteria.
    2. Reviewing the Texts: Users are given time to review a set of texts, with the encouragement to understand the content and context of each text for meaningful connections.
    3. Connecting the Texts: This is the main task where users start connecting the texts using any method that makes sense to them, such as grouping related texts or creating a visual map.
    4. Providing Explanations: After making the connections, users are asked to articulate their reasoning by detailing why and how they believe the texts are interconnected.
    <br />
    Following the paper prototype, the card sorting exercise aims to assess the perceived usefulness of potential functionalities. The structure of the card sorting exercise is as follows:
    1. Introduction to Card Sorting: Users are briefed that each card represents a potential functionality that could be integrated into the system.
    2. Card Review and Sorting: Users sort these cards into categories based on their perceived relevance and usefulness for the task of connecting texts.
    3. Discussion: A discussion follows the sorting, where users explain their rationale for their categorisation choices, offering insights into their thought process and understanding of the functionalities.

Usability metrics are integrated into the methodology to provide a quantitative layer to the qualitative insights. These metrics will serve as key performance indicators for evaluating the system's user-centred design.
It's worth noting that card sorting has its limitations. The exercise is subject to the imagination and interpretive skills of the tester, which means that the functionalities deemed "useful" or "not useful" are contingent on the tester's understanding and envisioning of how these functionalities could be implemented in a future AI-powered system.`,
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
  