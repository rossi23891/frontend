import { Carousel } from 'antd';
import LangCard from './LangCard';
import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../styles/caroussel.css'
const originData = [
    {
        key: '1',
        english: 'cat',
        russian: 'кошка',
        transcription: '[cat]',
        category: 'животные',
    },
    {
        key: '2',
        english: 'dog',
        russian: 'собака',
        transcription: '[dog]',
        category: 'животные',
    },
    {
        key: '3',
        english: 'mouse',
        russian: 'мышь',
        transcription: '[mouse]',
        category: 'животные',
    },
];

function CardsCaroussel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="CardsCaroussel">

            <Carousel style={{ height: '40vh' }}
                arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
                {originData.map((word, i) => (
                    <LangCard>
                        key={word.key},
                        english = {word.english},
                        russian = {word.russian},
                        transcription ={word.transcription},
                        category = {word.category}
                    </LangCard>
                ))}
            </Carousel>
        </div>
    );
}
export default CardsCaroussel;