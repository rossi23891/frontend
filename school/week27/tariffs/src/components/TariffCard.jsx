import { Card, Col } from 'antd';
import 'antd/dist/antd.css';

function TariffCard(props) {
    let isSelected = props.isSelected;
    return (
        <Col>
            <Card style={{ border: isSelected && "3px solid rgb(212, 212, 212)" }}>
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