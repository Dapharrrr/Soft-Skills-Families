import { Family } from './types';

export const families: Family[] = [
  {
    id: "communication",
    name: "Communication",
    color: "#27AE60", // Green (from image)
    cards: [
      { id: "comm-1", name: "Active Listening", description: "Fully focusing, understanding, and responding thoughtfully." },
      { id: "comm-2", name: "Speaking Clearly", description: "Expressing thoughts effectively through words and tone." },
      { id: "comm-3", name: "Body Language", description: "Conveying information through physical cues." },
      { id: "comm-4", name: "Public Speaking", description: "Delivering speeches with clarity and confidence." },
      { id: "comm-5", name: "Negotiation", description: "Discussing to reach a mutually beneficial agreement." },
      { id: "comm-6", name: "Written Communication", description: "Conveying messages clearly through text." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What is the primary goal of active listening?",
      choices: [
        "To formulate your response while the other person is speaking",
        "To fully focus on, understand, and respond thoughtfully to the speaker",
        "To interrupt and ask questions immediately"
      ],
      correctAnswer: 1
    },
    bonus: {
      type: "play_again",
      label: "Play Again",
      description: "Take another turn immediately."
    }
  },
  {
    id: "teamwork",
    name: "Teamwork",
    color: "#F39C12", // Yellow/Orange
    cards: [
      { id: "team-1", name: "Collaboration", description: "Working together to achieve a common goal." },
      { id: "team-2", name: "Conflict Management", description: "Resolving disagreements constructively." },
      { id: "team-3", name: "Information Sharing", description: "Exchanging knowledge to improve teamwork." },
      { id: "team-4", name: "Respecting Differences", description: "Valuing unique perspectives and backgrounds." },
      { id: "team-5", name: "Positive Attitude", description: "Maintaining an optimistic perspective." },
      { id: "team-6", name: "Constructive Feedback", description: "Giving actionable input to help others improve." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "Which action best demonstrates collaboration?",
      choices: [
        "Working independently on your own tasks",
        "Sharing ideas and responsibilities to achieve a common goal",
        "Assigning all work to one person"
      ],
      correctAnswer: 1
    },
    bonus: {
      type: "ask_again",
      label: "Ask Again",
      description: "Ask for another card from any player."
    }
  },
  {
    id: "problem_solving",
    name: "Problem Solving",
    color: "#2980B9", // Blue
    cards: [
      { id: "prob-1", name: "Critical Thinking", description: "Analyzing information objectively to form judgments." },
      { id: "prob-2", name: "Data Analysis", description: "Interpreting data to uncover patterns." },
      { id: "prob-3", name: "Risk Management", description: "Identifying and mitigating potential threats." },
      { id: "prob-4", name: "Decision-Making", description: "Choosing the best course of action." },
      { id: "prob-5", name: "Stress Management", description: "Using strategies to maintain balance under pressure." },
      { id: "prob-6", name: "Resilience", description: "Recovering and adapting after setbacks." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What is the core of critical thinking?",
      choices: [
        "Analyzing information objectively to form reasoned judgments",
        "Memorizing facts and figures",
        "Accepting the first solution that comes to mind"
      ],
      correctAnswer: 0
    },
    bonus: {
      type: "draw_card",
      label: "Draw Card",
      description: "Draw one card from the deck."
    }
  },
  {
    id: "adaptability",
    name: "Adaptability",
    color: "#8E44AD", // Purple
    cards: [
      { id: "adapt-1", name: "Flexibility", description: "Adapting to changing circumstances." },
      { id: "adapt-2", name: "Continuous Learning", description: "Consistently seeking new knowledge." },
      { id: "adapt-3", name: "Change Management", description: "Guiding others through transitions." },
      { id: "adapt-4", name: "Open-Mindedness", description: "Considering new ideas without bias." },
      { id: "adapt-5", name: "Versatility", description: "Handling diverse tasks effectively." },
      { id: "adapt-6", name: "Intellectual Curiosity", description: "Desire to learn and explore new concepts." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What does flexibility in the workplace mean?",
      choices: [
        "Strictly following a set routine",
        "Adapting to changing circumstances and challenges",
        "Refusing to learn new tools"
      ],
      correctAnswer: 1
    },
    bonus: {
      type: "peek",
      label: "Peek",
      description: "Look at one card from an opponent's hand."
    }
  },
  {
    id: "leadership",
    name: "Leadership",
    color: "#C0392B", // Red/Brown
    cards: [
      { id: "lead-1", name: "Team Motivation", description: "Inspiring the group to achieve goals." },
      { id: "lead-2", name: "Delegation", description: "Assigning tasks and authority to others." },
      { id: "lead-3", name: "Strategic Vision", description: "Having a clear long-term goal." },
      { id: "lead-4", name: "Taking Initiative", description: "Proactively acting on opportunities." },
      { id: "lead-5", name: "Coaching", description: "Guiding others to improve their skills." },
      { id: "lead-6", name: "Performance Management", description: "Monitoring progress and ensuring results." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What is the purpose of delegation?",
      choices: [
        "To avoid doing work yourself",
        "To assign tasks and empower others to develop skills",
        "To micromanage every detail"
      ],
      correctAnswer: 1
    },
    bonus: {
      type: "shield",
      label: "Shield",
      description: "Protect one of your completed families from being stolen (if stealing is allowed)."
    }
  },
  {
    id: "emotional_intelligence",
    name: "Emotional Intelligence",
    color: "#e67e22", // Orange
    cards: [
      { id: "ei-1", name: "Empathy", description: "Understanding and sharing others' feelings." },
      { id: "ei-2", name: "Self-Awareness", description: "Recognizing your own emotions and impact." },
      { id: "ei-3", name: "Self-Regulation", description: "Managing your emotions and behaviors." },
      { id: "ei-4", name: "Social Skills", description: "Interacting effectively with others." },
      { id: "ei-5", name: "Managing Emotions", description: "Controlling feelings to respond appropriately." },
      { id: "ei-6", name: "Conflict Resolution", description: "Addressing disagreements constructively." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What is empathy?",
      choices: [
        "Understanding and sharing another person's feelings",
        "Feeling sorry for someone",
        "Solving someone else's problems for them"
      ],
      correctAnswer: 0
    },
    bonus: {
      type: "steal",
      label: "Steal Card",
      description: "Steal a random card from an opponent."
    }
  },
  {
    id: "creativity",
    name: "Creativity",
    color: "#E91E63", // Pink
    cards: [
      { id: "create-1", name: "Innovative Thinking", description: "Generating new and effective ideas." },
      { id: "create-2", name: "Brainstorming", description: "Collaboratively generating ideas." },
      { id: "create-3", name: "Calculated Risk-Taking", description: "Making informed decisions despite uncertainty." },
      { id: "create-4", name: "Adapting Ideas", description: "Modifying concepts to suit new situations." },
      { id: "create-5", name: "Creative Problem Solving", description: "Finding unique solutions." },
      { id: "create-6", name: "Design Thinking", description: "User-focused approach to problem solving." }
    ],
    question: {
      type: "multiple_choice",
      prompt: "What is a key principle of brainstorming?",
      choices: [
        "Judging ideas immediately",
        "Generating many ideas without initial judgment",
        "Only proposing perfect solutions"
      ],
      correctAnswer: 1
    },
    bonus: {
      type: "play_again",
      label: "Play Again",
      description: "Take another turn immediately."
    }
  }
];

// Backward compatibility for existing App.tsx
export const bonusCards = families.map((f, index) => ({
  id: index,
  title: f.name + " Family",
  description: f.question.prompt,
  answer: typeof f.question.correctAnswer === 'number' && f.question.choices 
    ? f.question.choices[f.question.correctAnswer] 
    : "Answer logic needs update for new types"
}));
