import { useState } from "react";
import "./App.css";

const App = () => {
  const bonusCards = [
    // Communication Family
    {
      id: 1,
      title: "Communication Family",
      description:
        "Can you explain what active listening means, using as many words as possible?",
    },
    {
      id: 2,
      title: "Communication Family",
      description:
        "Can you explain what spoken expression means, using as many words as possible?",
    },
    {
      id: 3,
      title: "Communication Family",
      description:
        "Can you explain what written communication means, using as many words as possible?",
    },
    {
      id: 4,
      title: "Communication Family",
      description:
        "Can you explain what public speaking means, using as many words as possible?",
    },
    {
      id: 5,
      title: "Communication Family",
      description:
        "Can you explain what negotiation is, using as many words as possible?",
    },
    {
      id: 6,
      title: "Communication Family",
      description:
        "Pretend to listen to another player for 1 minute without saying a word. Then summarize what he said. If you forget something, you lose! (active listening)",
    },

    // Teamwork Family
    {
      id: 7,
      title: "Teamwork Family",
      description:
        "Can you explain what collaboration means, using as many words as possible?",
    },
    {
      id: 8,
      title: "Teamwork Family",
      description:
        "Can you explain what conflict management means, using as many words as possible?",
    },
    {
      id: 9,
      title: "Teamwork Family",
      description:
        "Can you explain what information sharing means, using as many words as possible?",
    },
    {
      id: 10,
      title: "Teamwork Family",
      description:
        "Can you explain what respecting differences means, using as many words as possible?",
    },
    {
      id: 11,
      title: "Teamwork Family",
      description:
        "Can you explain what positive attitude means, using as many words as possible?",
    },
    {
      id: 12,
      title: "Teamwork Family",
      description:
        "Can you explain what constructive feedback means, using as many words as possible?",
    },

    // Problem Solving Family
    {
      id: 13,
      title: "Problem Solving Family",
      description:
        "Can you explain what critical thinking means, using as many words as possible?",
    },
    {
      id: 14,
      title: "Problem Solving Family",
      description:
        "Can you explain what data analysis means, using as many words as possible?",
    },
    {
      id: 15,
      title: "Problem Solving Family",
      description:
        "Can you explain what risk management means, using as many words as possible?",
    },
    {
      id: 16,
      title: "Problem Solving Family",
      description:
        "Can you explain what decision-making means, using as many words as possible?",
    },
    {
      id: 17,
      title: "Problem Solving Family",
      description:
        "Can you explain what stress management means, using as many words as possible?",
    },
    {
      id: 18,
      title: "Problem Solving Family",
      description:
        "Can you explain what resilience means, using as many words as possible?",
    },

    // Adaptability Family
    {
      id: 19,
      title: "Adaptability Family",
      description:
        "Can you explain what flexibility means, using as many words as possible?",
    },
    {
      id: 20,
      title: "Adaptability Family",
      description:
        "Can you explain what continuous learning means, using as many words as possible?",
    },
    {
      id: 21,
      title: "Adaptability Family",
      description:
        "Can you explain what change management means, using as many words as possible?",
    },
    {
      id: 22,
      title: "Adaptability Family",
      description:
        "Can you explain what open-mindedness means, using as many words as possible?",
    },
    {
      id: 23,
      title: "Adaptability Family",
      description:
        "Can you explain what versatility means, using as many words as possible?",
    },
    {
      id: 24,
      title: "Adaptability Family",
      description:
        "Can you explain what intellectual curiosity means, using as many words as possible?",
    },

    // Leadership Family
    {
      id: 25,
      title: "Leadership Family",
      description:
        "Can you explain what team motivation means, using as many words as possible?",
    },
    {
      id: 26,
      title: "Leadership Family",
      description:
        "Can you explain what delegation means, using as many words as possible?",
    },
    {
      id: 27,
      title: "Leadership Family",
      description:
        "Can you explain what strategic vision means, using as many words as possible?",
    },
    {
      id: 28,
      title: "Leadership Family",
      description:
        "Can you explain what it means to take initiative, using as many words as possible?",
    },
    {
      id: 29,
      title: "Leadership Family",
      description:
        "Can you explain what coaching means, using as many words as possible?",
    },
    {
      id: 30,
      title: "Leadership Family",
      description:
        "Can you explain what performance management means, using as many words as possible?",
    },

    // Emotional Intelligence Family
    {
      id: 31,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what empathy means, using as many words as possible?",
    },
    {
      id: 32,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what self-awareness means, using as many words as possible?",
    },
    {
      id: 33,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what self-regulation means, using as many words as possible?",
    },
    {
      id: 34,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what social skills mean, using as many words as possible?",
    },
    {
      id: 35,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what managing emotions means, using as many words as possible?",
    },
    {
      id: 36,
      title: "Emotional Intelligence Family",
      description:
        "Can you explain what interpersonal conflict resolution means, using as many words as possible?",
    },

    // Creativity Family
    {
      id: 37,
      title: "Creativity Family",
      description:
        "Can you explain what innovative thinking means, and describe it using as many words as possible?",
    },
    {
      id: 38,
      title: "Creativity Family",
      description:
        "Can you explain what brainstorming means and describe it using as many words as possible?",
    },
    {
      id: 39,
      title: "Creativity Family",
      description:
        "Can you explain what calculated risk-taking means, using as many words as possible?",
    },
    {
      id: 40,
      title: "Creativity Family",
      description:
        "Can you explain what adapting ideas means, using as many words as possible?",
    },
    {
      id: 41,
      title: "Creativity Family",
      description:
        "Can you explain what creative problem solving means, using as many words as possible?",
    },
    {
      id: 42,
      title: "Creativity Family",
      description:
        "Can you explain what design thinking means, using as many words as possible?",
    },
  ];

  const [bonusCard, setBonusCard] = useState<null | {
    id: number;
    title: string;
    description: string;
  }>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const revealBonusCard = () => {
    if (!isFlipped) {
      const randomIndex = Math.floor(Math.random() * bonusCards.length);
      setBonusCard(bonusCards[randomIndex]);
    }
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Bonus Card</h1>
      <button
        onClick={revealBonusCard}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          margin: "20px 0",
        }}
      >
        {isFlipped ? "Hide Bonus Card" : "Reveal Bonus Card"}
      </button>

      <div
        style={{
          perspective: "1500px",
          width: "300px",
          height: "400px",
          margin: "0 auto", // Assure un centrage parfait
          position: "relative", // Garde l'alignement constant
          display: "flex", // Permet un équilibrage parfait
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformOrigin: "center center", // Important pour éviter les décalages
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {/* Back of Card */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              backgroundImage: `url('/src/assets/wallpaperflare.com_wallpaper.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "24px",
            }}
          ></div>

          {/* Front of Card */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: "white",
              color: "black",
              borderRadius: "24px",
              border: "8px solid #fff", // Vérifiez que ceci est identique des deux côtés
              boxSizing: "border-box", // Inclut les bordures dans les dimensions totales
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {bonusCard && (
              <>
                <h2 style={{ marginTop: "-40px" }}>{bonusCard.title}</h2>
                <p style={{ marginTop: "80px" }}>{bonusCard.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
