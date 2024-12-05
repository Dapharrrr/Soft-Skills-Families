import { useState } from "react";
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
              backgroundImage: `url('/wallpaperflare.com_wallpaper.jpg')`,
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
                <h2 >{bonusCard.title}</h2>
                <p >{bonusCard.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
