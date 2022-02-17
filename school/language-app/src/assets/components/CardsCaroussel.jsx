import LangCard from './LangCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/caroussel.css'
import Slider from 'react-slick';
import { useState } from 'react';

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
        key: '4',
        english: 'house',
        russian: 'дом',
        transcription: '[house]',
        category: 'быт',
    },
    {
        key: '5',
        english: 'snow',
        russian: 'снег',
        transcription: '[snow]',
        category: 'погода',
    },
    {
        key: '3',
        english: 'mouse',
        russian: 'мышь',
        transcription: '[mouse]',
        category: 'животные',
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: 'rgb(8, 110, 114)' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: 'rgb(8, 110, 114)' }}
            onClick={onClick}
        />
    );
}

export default function CardsCaroussel() {

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    const [selected, setSelected] = useState([]);
    const [counter, setCounter] = useState(0);

    const countItem = (item) => {
        setCounter(counter + 1);

        const newArr = new Set(selected);
        console.log(item);
        newArr.add(item);
        setSelected(Array.from(newArr));
    }

    return (
        <div className='caroussel'>
            <h2 className='title'> Guess the word</h2>
            <Slider {...settings} className='customSlider'>
                {originData.map((word, i) => {
                    return <LangCard key={i} id={i} {...word} count={countItem} />
                }
                )}
            </Slider>
            <h2>{`Всего кликов: ${counter}`}</h2>
            <h2>{`Выбранных карточек: ${selected.length} / ${originData.length}`}</h2>
        </div>
    );
}