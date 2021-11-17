let heroesJson = `[{
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "activities": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "powers": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"],
    "picture": "assets/images/batman.jpg"
}, 
{
    "name": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "activities": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "powers": ["непробиваемость", "полет", "самоисцеление", "суперзрение и суперслух"],
    "picture": "assets/images/superman.jpg"
},
{
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterEgo": "нет (полное имя — Тор Одинсон)",
    "activities": ["борец за справедливость", "скандинавский бог"],
    "friends": ["Мстители"],
    "powers": ["все, что может бог, плюс молот Мьелнир"],
    "picture": "assets/images/thor.jpg"
},
{
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "activities": ["супергероиня", "секретарь-референт"],
    "friends": ["Бэтмен", "Супермен"],
    "powers": ["сверхчеловеческая сила и скорость", "полет", "выносливость"],
    "picture": "assets/images/wonderwoman.jpg"
}, 
{
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "activities": ["супер-солдат"],
    "friends": ["Мстители"],
    "powers": ["бессмертие", "быстрая регенерация", "выносливость"],
    "picture": "assets/images/capitainamerica.jpg"
}]`

let ratings = [];

document.addEventListener("DOMContentLoaded", (event) => {
    let heroes = JSON.parse(heroesJson);
    console.log(heroes);

    if (localStorage.getItem('ratings') != null) {
        try {
            ratings = JSON.parse(localStorage.getItem('ratings'));
        } catch (err) {
            console.log(error);
        }
    }

    let galleryContent = '';
    for (let i = 0; i < heroes.length; i++) {
        let hero = heroes[i];
        let activities = getActivities(hero);
        let friends = getFriends(hero);
        let powers = getPowers(hero);

        galleryContent += `
        <div class="card my-3 col-6 offset-3">
            <img class="card-img-top" src=${hero.picture} alt="hero image"></img>
            <h2>${hero.name}</h2>
            <div>Вселенная: ${hero.universe}</div>
            <div>Альтер-эго: ${hero.alterEgo}</div>
            ${activities}
            ${friends}
            ${powers}
            <div id="rating_data">
            <label for="rating_data"> Ваш рейтинг для героя (от 1 до 10):</label>
            <input type="number" class="rating" id="rating" min="1" max="10"/>
            </div> 
            <div id="errors"></div>          
            </div>`;
    }

    document.querySelector(".gallery").innerHTML = galleryContent;

    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach((input, i) => {
        let rating = ratings[i] == null ? '' : ratings[i];
        input.value = rating;
    });

    inputs.forEach((input, i) => {

        input.addEventListener('change', () => {
            let newRating = +input.value;
            ratings[i] = newRating;
            console.log(newRating);
            localStorage.setItem('ratings', JSON.stringify(ratings));
        });
    });
});

function getActivities(hero) {
    if (hero.activities == undefined || hero.activities.length == 0) {
        return '';
    }
    if (hero.activities.length == 1) {
        return `<div>Род деятельности: ${hero.activities[0]}</div>`;
    }
    let all = hero.activities.join(", ");
    return `<div>Род деятельности: ${all}</div>`;
}

function getFriends(hero) {
    if (hero.friends == undefined || hero.friends.length == 0) {
        return '';
    }
    if (hero.friends.length == 1) {
        return `<div>Друзья: ${hero.friends[0]}</div>`;
    }
    let all = hero.friends.join(", ");
    return `<div>Друзья: ${all}</div>`;
}

function getPowers(hero) {
    if (hero.powers == undefined || hero.powers.length == 0) {
        return '';
    }
    if (hero.powers.length == 1) {
        return `<div>Суперсилы: ${hero.powers[0]}</div>`;
    }
    let all = hero.powers.join(", ");
    return `<div>Суперсилы: ${all}</div>`;
}