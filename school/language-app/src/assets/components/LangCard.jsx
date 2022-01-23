import { Card } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
function LangCard(props) {
    const { english, transcription, russian } = props;
    const [transcriptionVisible, setTranscriptionVisible] = useState(false);

    const handleChange = () => {
        setTranscriptionVisible(!transcriptionVisible);
    };

    return (
        <div className="LangCard">
            <Card>
                <div className="EnglishText">{english}</div>
                <div className="Transription">{transcription}</div>
                {transcriptionVisible ? <div className="RussianText">{russian}</div>
                    : <button className="CardButton" onClick={handleChange}>Check</button>}
            </Card>
        </div>
    );
}
export default LangCard;