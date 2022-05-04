import React from "react";
import "./WinningModal.css";

export default function WinningModal({ setOpenModal, turns, shuffleCards }) {
  const newGameClick = () => {
    shuffleCards();
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>You WON!</h1>
        </div>
        <div className="body">
          <p>It took you {turns} turns!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              newGameClick();
            }}
            id="newGameBtn"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}
