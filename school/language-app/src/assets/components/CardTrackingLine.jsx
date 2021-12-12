function CardTrackingLine(props) {
    return (
        <div className="line">
            <div className="card-decription">{props.description}</div>
            <div className="card-date">{props.date}</div>
            <div className="card-stars">{props.stars}</div>
        </div>
    );
}
export default CardTrackingLine;