import React, { useState } from "react";
const WordsContext = React.createContext();

function WordsContextProvider(props) {

    const [words, setWords] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fillWords() {
        setLoading(true);

        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Oops - api error ...');
                }
            })
            .then((response) => {
                setWords(response);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }

    const addWord = (record) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
        })
            .then((response) => {
                if (response.ok) { //Проверяем что код ответа 200
                    console.log(response);
                } else {
                    throw new Error('Oops - api error while adding data...');
                }
            })
            .then(() => fillWords())
            .catch((error) => {
                setError(error);
            });
    }

    const editWord = (record) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${record.key}/update`, {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
        })
            .then((response) => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Oops - api error while editing data ...');
                }
            })
            .then(() => fillWords())
            .catch((error) => {
                setError(error);
            });
    };

    const deleteWord = (key) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${key}/delete`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
        })
            .then((response) => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Oops - api error while deleting data ...');
                }
            })
            .then(() => fillWords())
            .catch((error) => {
                setError(error);
            });
    };

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <WordsContext.Provider value={{ words, fillWords, deleteWord, editWord, addWord }}>
            {props.children}
        </WordsContext.Provider>
    );
}

export { WordsContextProvider, WordsContext };