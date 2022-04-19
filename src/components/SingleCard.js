import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }
    
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ''}>
                <img src={'RPG-Style-Memory-Game' + card.src} className="front" alt="Card Front" />
                <img src="RPG-Style-Memory-Game/img/cover-1.png" className="cover" alt="Card Cover" onClick={ handleClick }/>
            </div>
        </div>  
    );
}
