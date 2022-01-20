function Comment(props) {
    const { text, highlighted } = props;

    return (
        <div className="Comment" style={{ color: highlighted && "rgb(0, 81, 255)" }}>
            {text}
        </div>
    );
}

export default Comment;