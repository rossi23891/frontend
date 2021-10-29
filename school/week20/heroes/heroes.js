let heroesJson = `[{
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "activities": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "powers": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"],
    "picture": "assets/images/batman.jpg",
    "personId": 1
}, 
{
    "name": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "activities": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "powers": ["непробиваемость", "полет", "самоисцеление", "суперзрение и суперслух"],
    "picture": "assets/images/superman.jpg",
    "personId": 2
},
{
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterEgo": "нет (полное имя — Тор Одинсон)",
    "activities": ["борец за справедливость", "скандинавский бог"],
    "friends": ["Мстители"],
    "powers": ["все, что может бог, плюс молот Мьелнир"],
    "picture": "assets/images/thor.jpg",
    "personId": 6
},
{
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "activities": ["супергероиня", "секретарь-референт"],
    "friends": ["Бэтмен", "Супермен"],
    "powers": ["сверхчеловеческая сила и скорость", "полет", "выносливость"],
    "picture": "assets/images/wonderwoman.jpg",
    "personId": 11
}, 
{
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "activities": ["супер-солдат"],
    "friends": ["Мстители"],
    "powers": ["бессмертие", "быстрая регенерация", "выносливость"],
    "picture": "assets/images/capitainamerica.jpg",
    "personId": 19
}]`

document.addEventListener("DOMContentLoaded", (event) => {
    let heroes = JSON.parse(heroesJson);
    console.log(heroes);
    // let savedRatings = getRatingsFromLocalStorage();

    let galleryContent = '';
    for (let hero of heroes) {
        let activities = getActivities(hero);
        let friends = getFriends(hero);
        let powers = getPowers(hero);
        // let rating = getRating(hero, savedRatings);
        galleryContent += `
        <div class="card my-3 col-6 offset-3">
            <img class="card-img-top" src=${hero.picture} alt="hero image"></img>
            <h2>${hero.name}</h2>
            <div>Вселенная: ${hero.universe}</div>
            <div>Альтер-эго: ${hero.alterEgo}</div>
            ${activities}
            ${friends}
            ${powers}
            <div id="rating">Ваш рейтинг для ${hero.name}: 0</div>
            <div class="text-center">
            <button type="button" class="btn btn-primary my-3">Пересчитать рейтинг для ${hero.name}</button>
            </div>            
            </div>`;
    }
    document.querySelector(".gallery").innerHTML = galleryContent;
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

// function getRating(hero, savedRatings) {
//     if (savedRatings != undefined) {
//         for (let i = 0; i < savedRatings.length; i++) {
//             if (savedRatings[i].personId == hero.personId && savedRatings[i].rating != null) {
//                 return savedRatings[i].rating;
//             }
//         }
//     }
//     return 0;
// }

// function getRatingsFromLocalStorage() {
//     if (localStorage.getItem('ratedPersons')) {
//         return JSON.parse(localStorage.getItem('ratedPersons'));
//     }
// }

// function changeRate(hero) {
//     let newRate = prompt("введите новый рейтинг от 1 до 10");
//     validateRating(newRate);
//     saveRate(hero, newRate);
// }

// function saveRate(hero, newRate) {
//     let currentRatings = getRatingsFromLocalStorage();
//     let found = false;
//     for (let i = 0; i < currentRatings.length; i++) {
//         if (currentRatings[i].personId == hero.personId) {
//             currentRatings[i].rating = newRate;
//             found = true;
//         }

//     }
//     if (!found) {
//         currentRatings.push(new RatedPerson(hero.personId, newRate));
//     }
//     localStorage.setItem('rate', JSON.stringify(currentRatings));
// }

// function validateRating(rating) {
//     if (rating < 1 || rating > 10) {
//         alert('Некорретный рейтинг - введите рейтинг от 1 до 10');
//     }
// }

// class RatedPerson {
//     constructor(personId, rating) {
//         this.personId = personId;
//         this.rating = rating;
//     }
// }