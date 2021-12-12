import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import batman from './assets/images/batman.jpg';
import capitainamerica from './assets/images/capitainamerica.jpg';
import superman from './assets/images/superman.jpg';
import thor from './assets/images/thor.jpg';
import wonderwoman from './assets/images/wonderwoman.jpg';

function App() {
  const heroesJson = [{
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "activities": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "powers": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"],
    "picture": batman
  },
  {
    "name": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "activities": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "powers": ["непробиваемость", "полет", "самоисцеление", "суперзрение и суперслух"],
    "picture": superman
  },
  {
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterEgo": "нет (полное имя — Тор Одинсон)",
    "activities": ["борец за справедливость", "скандинавский бог"],
    "friends": ["Мстители"],
    "powers": ["все, что может бог, плюс молот Мьелнир"],
    "picture": thor
  },
  {
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "activities": ["супергероиня", "секретарь-референт"],
    "friends": ["Бэтмен", "Супермен"],
    "powers": ["сверхчеловеческая сила и скорость", "полет", "выносливость"],
    "picture": wonderwoman
  },
  {
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "activities": ["супер-солдат"],
    "friends": ["Мстители"],
    "powers": ["бессмертие", "быстрая регенерация", "выносливость"],
    "picture": capitainamerica
  }];
  return (
    <div className="App">
      {
        heroesJson.map((hero) =>
          <Hero name={hero.name} universe={hero.universe} alterEgo={hero.alterEgo} activities={hero.activities}
            friends={hero.friends} powers={hero.powers} picture={hero.picture}></Hero>
        )
      }
    </div>
  );
}

export default App;
