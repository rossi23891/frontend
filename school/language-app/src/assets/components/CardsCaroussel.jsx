import LangCard from './LangCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/caroussel.css'
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";


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

function CardsCaroussel({ wordsStore }) {

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

    useEffect(() => {
        wordsStore.loadData();
    }, []);

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
                {wordsStore.words.map((word, i) => {
                    return <LangCard key={i} id={i} {...word} count={countItem} />
                }
                )}
            </Slider>
            <h2>{`Всего кликов: ${counter}`}</h2>
            <h2>{`Выбранных карточек: ${selected.length} / ${wordsStore.words.length}`}</h2>
        </div>
    );
}

export default inject(["wordsStore"])(observer(CardsCaroussel));