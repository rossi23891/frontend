import LangCard from './LangCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/caroussel.css'
import Slider from 'react-slick';

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };
    return (
        <div className='caroussel'>
            <h2 className='title'> Guess the word</h2>
            <Slider {...settings} className='customSlider'>
                {originData.map((word, i) => (
                    <LangCard
                        key={i}
                        {...word}
                    />
                ))}
            </Slider>
        </div>
    );
}