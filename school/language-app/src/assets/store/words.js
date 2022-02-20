import { makeAutoObservable, runInAction } from "mobx";

export default class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    add = (word) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
            method: "POST",
            body: JSON.stringify({
                english: word.english,
                russian: word.russian,
                transcription: word.transcription,
                tags: []
            }
            ),
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
            .then(() => {
                this.words.push(word);
                this.setState({ isLoading: false });
            });
        ;
    };

    remove = (index) => {
        this.words.splice(index, 1);
    };

    loadData = async () => {
        // если данные уже были загружены или их уже кто-то загружает
        // то ничего не делаем
        if (this.isLoaded || this.isLoading) {
            return;
        }

        // пока что все синхронно
        // поэтому runInAction не нужены
        this.isLoading = true;

        // загрузка с сервера (тут должен быть fetch)
        // асинхронно
        const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
        const data = await response.json();

        // так как функция асинхронная
        // то теперь меняя данные в MobX
        // надо явно указать на эти изменения
        // с помощью функции runInAction
        runInAction(() => {
            this.words = data;
            this.isLoading = false;
            this.isLoaded = true;
        });
    };
}