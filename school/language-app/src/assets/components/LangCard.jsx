import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../styles/lang_card.css'
import { useState, useRef, useEffect } from 'react';
function LangCard(props) {
    const { english, transcription, russian } = props;
    const [transcriptionVisible, setTranscriptionVisible] = useState(false);

    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    const handleChange = (event) => {
        setTranscriptionVisible(!transcriptionVisible);
        props.count(props.id);
    };

    return (
        <div className="LangCard">
            <Card>
                <div className="EnglishText">{english}</div>
                <div className="Transription">{transcription}</div>
                <p></p>
                {transcriptionVisible ? <div className="RussianText">{russian}</div>
                    : <button className="CardButton" onClick={handleChange} ref={ref}>Check</button>}
            </Card>
        </div>
    );
}
export default LangCard;