import { useState, useEffect } from "react";
import "./App.css";
import { bonusCards } from "./data";
import "../public/logo 1.png";

const App = () => {
  const [bonusCard, setBonusCard] = useState<null | {
    id: number;
    title: string;
    description: string;
  }>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // Temps restant

  const revealBonusCard = () => {
    if (!isFlipped) {
      const randomIndex = Math.floor(Math.random() * bonusCards.length);
      setBonusCard(bonusCards[randomIndex]);
      setTimeLeft(60); // Démarre le compte à rebours de 45 secondes
    }
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isFlipped && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsFlipped(false); // Cache la carte lorsque le timer atteint 0
    }

    return () => clearInterval(timer); // Nettoie l’intervalle
  }, [isFlipped, timeLeft]);

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "110vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/logo 1.png" alt="" />
      <h1>Bonus Card</h1>
      <button
        onClick={revealBonusCard}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          margin: "20px 0",
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
        }}
      >
        {isFlipped ? "Hide Bonus Card" : "Reveal Bonus Card"}
      </button>

      {isFlipped && (
        <div style={{ marginTop: "10px", marginBottom: "10px" ,fontSize: "18px", fontWeight: "bold" }}>
          Time left: {timeLeft} seconds
        </div>
      )}

      <div
        style={{
          perspective: "1500px",
          width: "300px",
          height: "400px",
          margin: "0 auto",
          display: "flex",
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
            transformOrigin: "center center",
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
              backgroundImage: `url('/dos card.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
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
              border: "8px solid #fff",
              boxSizing: "border-box",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {bonusCard && (
              <>
                <h2>{bonusCard.title}</h2>
                <p>{bonusCard.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
