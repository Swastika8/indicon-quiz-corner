
export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  readingContent: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: "preamble",
    title: "The Preamble of Indian Constitution",
    description: "Test your knowledge on the Preamble, which serves as a brief introduction to the Constitution.",
    difficulty: "easy",
    estimatedTime: "10 min",
    readingContent: `
      <h3 class="text-lg font-semibold mb-3">Understanding the Preamble</h3>
      <p class="mb-4">The Preamble to the Constitution of India is a brief introductory statement that sets out guidelines, which guide the people of the nation, and to present the principles of the Constitution, and to indicate the source from which the document derives its authority, and meaning. The hopes and aspirations of the people are described in it.</p>
      
      <p class="mb-4">The preamble can be referred to as the preface which highlights the essence of the entire Constitution. It was adopted on 26 November 1949 by the Constituent Assembly and came into effect on 26 January 1950, which is celebrated as the Republic day in India.</p>
      
      <div class="px-6 py-4 mt-4 mb-4 bg-indicon-saffron/10 rounded-lg">
        <p class="text-center font-semibold mb-2">WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a</p>
        <p class="text-center"><span class="font-bold">SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</span> and to secure to all its citizens:</p>
        <ul class="list-disc ml-8 mt-2">
          <li><span class="font-semibold">JUSTICE</span>, social, economic and political;</li>
          <li><span class="font-semibold">LIBERTY</span> of thought, expression, belief, faith and worship;</li>
          <li><span class="font-semibold">EQUALITY</span> of status and of opportunity; and to promote among them all;</li>
          <li><span class="font-semibold">FRATERNITY</span> assuring the dignity of the individual and the unity and integrity of the Nation;</li>
        </ul>
        <p class="text-center mt-2">IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.</p>
      </div>
      
      <p class="mb-3"><span class="font-semibold">Key Points:</span></p>
      <ul class="list-disc ml-8 mb-4">
        <li>The words 'socialist' and 'secular' were added to the Preamble by the 42nd Amendment Act, 1976.</li>
        <li>The Supreme Court of India has, in the Kesavananda Bharati case, recognized that the Preamble may be used to interpret ambiguous areas of the Constitution.</li>
        <li>The Preamble indicates the source from which the Constitution derives its authority, i.e., the people of India.</li>
      </ul>
    `,
    questions: [
      {
        id: "preamble-q1",
        text: "Which of the following terms was NOT originally part of the Preamble when it was adopted in 1949?",
        options: [
          { id: "p1-opt1", text: "Sovereign", isCorrect: false },
          { id: "p1-opt2", text: "Democratic", isCorrect: false },
          { id: "p1-opt3", text: "Socialist", isCorrect: true },
          { id: "p1-opt4", text: "Republic", isCorrect: false }
        ],
        explanation: "The terms 'Socialist' and 'Secular' were not part of the original Preamble. They were added later by the 42nd Constitutional Amendment Act, 1976 during the Emergency period."
      },
      {
        id: "preamble-q2",
        text: "Which amendment added the words 'Socialist' and 'Secular' to the Preamble?",
        options: [
          { id: "p2-opt1", text: "42nd Amendment, 1976", isCorrect: true },
          { id: "p2-opt2", text: "44th Amendment, 1978", isCorrect: false },
          { id: "p2-opt3", text: "73rd Amendment, 1992", isCorrect: false },
          { id: "p2-opt4", text: "86th Amendment, 2002", isCorrect: false }
        ],
        explanation: "The 42nd Amendment Act, 1976 added the words 'Socialist' and 'Secular' to the Preamble during the Emergency period (1975-77) under Prime Minister Indira Gandhi's government."
      },
      {
        id: "preamble-q3",
        text: "According to the Preamble, from where does the Constitution derive its authority?",
        options: [
          { id: "p3-opt1", text: "The Parliament of India", isCorrect: false },
          { id: "p3-opt2", text: "The Supreme Court", isCorrect: false },
          { id: "p3-opt3", text: "The People of India", isCorrect: true },
          { id: "p3-opt4", text: "The President of India", isCorrect: false }
        ],
        explanation: "The opening words of the Preamble 'WE, THE PEOPLE OF INDIA' clearly indicate that the Constitution derives its authority from the people of India. This establishes the principle of popular sovereignty."
      },
      {
        id: "preamble-q4",
        text: "In which famous case did the Supreme Court recognize that the Preamble may be used to interpret ambiguous areas of the Constitution?",
        options: [
          { id: "p4-opt1", text: "Minerva Mills case", isCorrect: false },
          { id: "p4-opt2", text: "Kesavananda Bharati case", isCorrect: true },
          { id: "p4-opt3", text: "S.R. Bommai case", isCorrect: false },
          { id: "p4-opt4", text: "Golaknath case", isCorrect: false }
        ],
        explanation: "In the landmark Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is part of the Constitution and may be used to interpret ambiguous areas of the Constitution. It also established the 'Basic Structure Doctrine'."
      },
      {
        id: "preamble-q5",
        text: "Which of the following is NOT mentioned as an objective in the Preamble?",
        options: [
          { id: "p5-opt1", text: "Justice", isCorrect: false },
          { id: "p5-opt2", text: "Liberty", isCorrect: false },
          { id: "p5-opt3", text: "Equality", isCorrect: false },
          { id: "p5-opt4", text: "Prosperity", isCorrect: true }
        ],
        explanation: "The Preamble mentions Justice, Liberty, Equality, and Fraternity as objectives of the Indian Constitution. 'Prosperity' is not specifically mentioned as an objective in the Preamble."
      }
    ]
  },
  {
    id: "fundamental-rights",
    title: "Fundamental Rights (Articles 12-35)",
    description: "Learn about the rights that are guaranteed to all citizens of India by the Constitution.",
    difficulty: "medium",
    estimatedTime: "15 min",
    readingContent: `
      <h3 class="text-lg font-semibold mb-3">Understanding Fundamental Rights</h3>
      <p class="mb-4">Fundamental Rights are the basic human rights enshrined in the Constitution of India which are guaranteed to all citizens. They are applied without discrimination on the basis of race, religion, gender, etc. Fundamental rights for Indians have been adopted from the Constitution of the United States of America.</p>
      
      <p class="mb-4">Initially, the Constitution provided for seven fundamental rights:</p>
      <ol class="list-decimal ml-8 mb-4">
        <li>Right to Equality (Articles 14-18)</li>
        <li>Right to Freedom (Articles 19-22)</li>
        <li>Right Against Exploitation (Articles 23-24)</li>
        <li>Right to Freedom of Religion (Articles 25-28)</li>
        <li>Cultural and Educational Rights (Articles 29-30)</li>
        <li>Right to Property (Article 31) - removed by the 44th Amendment Act, 1978</li>
        <li>Right to Constitutional Remedies (Articles 32-35)</li>
      </ol>
      
      <p class="mb-4">After the 44th Amendment in 1978, the Right to Property was removed from the list of fundamental rights and made a legal right under Article 300A.</p>
      
      <h4 class="font-semibold mt-4 mb-2">Characteristics of Fundamental Rights:</h4>
      <ul class="list-disc ml-8 mb-4">
        <li>They are not absolute and can be limited by the State.</li>
        <li>Most of them are available against the State.</li>
        <li>Some of them are available to all persons while others are only for citizens.</li>
        <li>They can be suspended during national emergency, except Articles 20 and 21.</li>
        <li>They are justiciable, meaning they are enforceable by courts.</li>
      </ul>
      
      <p class="mb-4">Dr. B.R. Ambedkar called Article 32 (the Right to Constitutional Remedies) the "heart and soul" of the Constitution as it provides for the enforcement of fundamental rights.</p>
      
      <div class="px-6 py-4 mt-4 mb-4 bg-indicon-navy/10 rounded-lg">
        <h4 class="font-semibold mb-2">Special Note on Writs under Article 32:</h4>
        <p class="mb-2">The Supreme Court has the power to issue writs for the enforcement of fundamental rights. These writs are:</p>
        <ul class="list-disc ml-8">
          <li><span class="font-semibold">Habeas Corpus:</span> To release a person who has been detained unlawfully.</li>
          <li><span class="font-semibold">Mandamus:</span> To order a public authority to perform its duty.</li>
          <li><span class="font-semibold">Prohibition:</span> To prohibit a lower court from proceeding with a case.</li>
          <li><span class="font-semibold">Certiorari:</span> To quash the order already passed by a lower court or tribunal.</li>
          <li><span class="font-semibold">Quo Warranto:</span> To restrain a person from holding a public office they are not entitled to.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        id: "fr-q1",
        text: "Which of the following is no longer a Fundamental Right after the 44th Amendment Act, 1978?",
        options: [
          { id: "fr1-opt1", text: "Right to Equality", isCorrect: false },
          { id: "fr1-opt2", text: "Right to Freedom", isCorrect: false },
          { id: "fr1-opt3", text: "Right to Property", isCorrect: true },
          { id: "fr1-opt4", text: "Right to Constitutional Remedies", isCorrect: false }
        ],
        explanation: "The Right to Property (Article 31) was removed from the list of Fundamental Rights by the 44th Amendment Act, 1978. It was made a legal right under Article 300A."
      },
      {
        id: "fr-q2",
        text: "Which article of the Constitution was described by Dr. B.R. Ambedkar as the 'heart and soul of the Constitution'?",
        options: [
          { id: "fr2-opt1", text: "Article 14", isCorrect: false },
          { id: "fr2-opt2", text: "Article 19", isCorrect: false },
          { id: "fr2-opt3", text: "Article 21", isCorrect: false },
          { id: "fr2-opt4", text: "Article 32", isCorrect: true }
        ],
        explanation: "Dr. B.R. Ambedkar described Article 32 (Right to Constitutional Remedies) as the 'heart and soul of the Constitution' because it provides for the enforcement of fundamental rights through the Supreme Court."
      },
      {
        id: "fr-q3",
        text: "Which of the following fundamental rights cannot be suspended even during a national emergency?",
        options: [
          { id: "fr3-opt1", text: "Articles 20 and 21", isCorrect: true },
          { id: "fr3-opt2", text: "Articles 14 and 15", isCorrect: false },
          { id: "fr3-opt3", text: "Articles 25 and 26", isCorrect: false },
          { id: "fr3-opt4", text: "Articles 29 and 30", isCorrect: false }
        ],
        explanation: "Articles 20 (Protection in respect of conviction for offenses) and 21 (Protection of life and personal liberty) cannot be suspended even during a national emergency. This was established by the 44th Amendment after the experience of the 1975-77 Emergency."
      },
      {
        id: "fr-q4",
        text: "Which writ is issued by a court to release a person who has been detained unlawfully?",
        options: [
          { id: "fr4-opt1", text: "Mandamus", isCorrect: false },
          { id: "fr4-opt2", text: "Habeas Corpus", isCorrect: true },
          { id: "fr4-opt3", text: "Quo Warranto", isCorrect: false },
          { id: "fr4-opt4", text: "Certiorari", isCorrect: false }
        ],
        explanation: "Habeas Corpus (meaning 'you shall have the body') is a writ issued by a court to release a person who has been detained unlawfully. It is a remedy to ensure personal liberty."
      },
      {
        id: "fr-q5",
        text: "The Fundamental Rights in the Indian Constitution have been inspired by which country's constitution?",
        options: [
          { id: "fr5-opt1", text: "United Kingdom", isCorrect: false },
          { id: "fr5-opt2", text: "Canada", isCorrect: false },
          { id: "fr5-opt3", text: "United States of America", isCorrect: true },
          { id: "fr5-opt4", text: "Australia", isCorrect: false }
        ],
        explanation: "The Fundamental Rights enshrined in the Indian Constitution have been primarily inspired by the Bill of Rights contained in the Constitution of the United States of America."
      }
    ]
  }
];
