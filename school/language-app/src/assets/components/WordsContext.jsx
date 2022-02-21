import React, { useState, useEffect } from "react";
const WordsContext = React.createContext();

function WordsContextProvider(props) {

    const [words, setWords] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => fillWords(), []);

    function fillWords() {
        setLoading(true);

        fetch('/api/words')
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
        fetch('/api/words/add', {
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
            .then(response => {
                if (response?.errors?.length) {
                    throw new Error('Oops - api error while adding data...');
                }
                else {
                    fillWords();
                }
            })
            .catch((error) => {
                setError(error);
            });
    }

    const editWord = (record) => {
        fetch(`/api/words/${record.key}/update`, {
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
        fetch(`/api/words/${key}/delete`, {
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