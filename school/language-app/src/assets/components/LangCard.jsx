import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../styles/lang_card.css'
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
                <div className="EnglishText" style={{ color: 'rgb(8, 110, 114)', fontWeight: 'bold' }}>{english}</div>
                <div className="Transription">{transcription}</div>
                <p></p>
                {transcriptionVisible ? <div className="RussianText" style={{ fontWeight: 'bold' }}>{russian}</div>
                    : <button className="CardButton" style={{
                        backgroundColor: 'rgb(227, 229, 230)',
                        color: 'rgb(8, 110, 114)', fontWeight: 'bold', borderRadius: '5px', border: '2px solid rgb(8, 110, 114)'
                    }}
                        onClick={handleChange}>Check</button>}
            </Card>
        </div>
    );
}
export default LangCard;