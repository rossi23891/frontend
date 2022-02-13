import React, { useState } from "react";
const WordsContext = React.createContext();

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

function WordsContextProvider(props) {

    const [words, setWords] = useState([]);

    function fillWords() {
        setWords(originData);
    }

    return (
        <WordsContext.Provider value={{ words, fillWords }}>
            {props.children}
        </WordsContext.Provider>
    );
}

export { WordsContextProvider, WordsContext };