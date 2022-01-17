function Comment(props) {
    const { text, highlighted } = props;

    let highlightedClass = ("highlighted");

    return (
        <div className={`Comment ${highlighted && highlightedClass}`}>
            {text}
        </div>
    );
}

export default Comment;