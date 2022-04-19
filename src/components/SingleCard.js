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
                <img src={ card.src} className="front" alt="Card Front" />
                <img src="/img/cover-1.png" className="cover" alt="Card Cover" onClick={ handleClick }/>
            </div>
        </div>  
    );
}
