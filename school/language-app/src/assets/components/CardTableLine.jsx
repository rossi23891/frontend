function CardTableLine(props) {
    return (
        <div className="line">
            <div className="CardDecription">{props.description}</div>
            <div className="CardDate">{props.date}</div>
            <div className="CardStars">{props.stars}</div>
        </div>
    );
}
export default CardTableLine;