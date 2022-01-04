import { Card, Col } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

function TariffCard(props) {
    const [selected, setSelected] = useState(props.isSelected || false);
    const handleChange = () => {
        setSelected(!selected);
    };
    return (
        <Col>
            <Card style={{ border: selected && "3px solid rgb(212, 212, 212)" }} onClick={handleChange}>
                <div className={props.color}>
                    {/* передаем сюда цену тоже, чтоб не разъехалось */}
                    <div className="cardTitle">{props.title} {props.price}</div>
                    <div className="cardPrice">{props.price} руб/мес</div>
                </div>
                <div className="cardSpeed">до {props.speed} мбит/сек</div>
                <div className="cardDetails">{props.details}</div>
            </Card>
        </Col>
    );
}
export default TariffCard;