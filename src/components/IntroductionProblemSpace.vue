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
          <img src="/images/Figure1.png" alt="GPT-4 vs Human Tests" class="w-full h-auto" />
          <p class="text-sm text-gray-500 mt-1 text-center">GPT-4 vs Human Tests</p>
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
      introduction: `The sheer volume of information available in today's digital era is daunting. The data flood is undeniable. Daily, vast amounts of information are generated, with approximately 328.77 million terabytes produced daily. This equates to an astounding 0.33 zettabytes every day or an annual production of around 120 zettabytes. A significant portion of this data is text-based, including everything from academic articles to social media posts, business reports and personal blogs (Duarte, 2023).

      The increase in internet usage has accelerated this trend. As of 2023, nearly two-thirds of the global population, or approximately 5.3 billion individuals, are connected online (Kemp, 2021). This extensive and interconnected web of users contributes daily to the growing mountain of data. Platforms like Facebook, Twitter (or X) and academic databases process and store massive amounts of textual data, making society's task of navigating this sea of information even more difficult.
      
      However, the challenge extends beyond the sheer volume of data. The real issue lies in how we interpret, understand, and use this vast collection of textual information. Traditional visualisation techniques are helpful, but they frequently fail to capture the intricate nuances and relationships found in textual data. Shneiderman (2003) emphasised the importance of user-friendly design in visualisation tools, arguing that systems should allow users to explore and manipulate visualised data. This notion aligns with findings from interviews with students and professionals, who expressed a need for dynamic and adaptable systems that can better manage complex textual information (Author, personal communication, 2023; see appendix A for the summary). 
      With these considerations, a need arises for an intelligent method of visualising textual data.
      Enter the potential of artificial intelligence (AI), as OpenAI's GPT-4 demonstrates. The advanced model not only understands and generates natural language content, but it also performs well in complex and nuanced settings. It has been tested on several human-designed exams and consistently outperforms most human test-takers, as shown in Figure 1 (OpenAI, 2023).`,
      text2: `Because the model can anticipate the next token in a document, it may uncover patterns, links, and insights in textual data that are frequently undetectable to the human eye or beyond the capability of traditional technologies (Bubeck et al., 2023). This predictive feature can be used to build more dynamic and interactive textual data visualisations. However, incorporating AI into visualisation tools is still in its early phases, and there are other obstacles ahead. How can AI be effectively used to improve textual data visualisation? How may these visualisations be made more user-friendly and informative? The problem space revolves around the need for effective visualisation techniques driven by artificial intelligence to make sense of the vast and intricate world of textual data.`
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
