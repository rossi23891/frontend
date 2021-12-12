function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">{props.universe}</div>
            <div className="hero-alterego">{props.alterEgo}</div>
            <div className="hero-activities">{props.activities.join(', ')}</div>
            <div className="hero-friends">{props.friends.join(', ')}</div>
            <div className="hero-powers">{props.powers.join(', ')}</div>
            <img src={props.picture} />
        </div>
    );
}

export default Hero;