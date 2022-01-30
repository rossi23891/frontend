import LangCard from './LangCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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

export default function CardsCaroussel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <LeftOutlined />,
        nextArrow: <RightOutlined />
    };
    return (
        <div className='caroussel'>
            <h2 style={{ marginTop: '6vh', color: 'rgb(8, 110, 114)', fontWeight: 'bold', fontSize: '3em' }}> Guess the word</h2>
            <Slider {...settings} style={{ height: '60vh', border: '1px solid rgb(8, 110, 114)', marginTop: '9vh', width: '94vw', marginLeft: '2vw' }}>
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