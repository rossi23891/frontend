import { useState } from "react";
import "../styles/buttons.css"
import Comment from "./Comment";

function CommentsArea() {
    const { comments, setComments } = useState([]);
    const { message, setMessage } = useState('');

    let addComment = () => {
        let newComment = message;
        if (newComment != null) {
            let commentsUpd = [...comments];
            commentsUpd.unshift(newComment);

            //change state
            console.log(commentsUpd);
            setComments(commentsUpd);
            setMessage('');
        }
    };

    let handleAreaChange = (event) => {
        let currentMes = event.target.value;
        console.log(currentMes);
        setMessage(currentMes);
    }

    return (
        <div className="CommentsArea">
            <div>
                {comments.map((text, index) => (
                    <Comment key={index} text={text} highlighted={index === 0} />
                )
                )}
            </div>
            <label style={{ fontSize: '2vh' }}>Please enter your answer here: </label>
            <p></p>
            <textarea
                value={message}
                rows={5}
                cols={50}
                onKeyDown={handleAreaChange}
            />
            <p></p>

            <button className="SendButton" onClick={addComment}>Reply</button>
        </div >
    );
}

export default CommentsArea;