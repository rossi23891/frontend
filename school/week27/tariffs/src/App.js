import './App.css';
import 'antd/dist/antd.css';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import TariffCard from './components/TariffCard';

// общие части, вынесла, чтоб не дублировать
const title = "Безлимитный";
const details = "Объем включенного трафика не ограничен";
let tariffs = [{
  "price": 300,
  "color": "tariff_300",
  "speed": 10,
  "isSelected": false
}, {
  "price": 450,
  "color": "tariff_450",
  "speed": 50,
  "isSelected": false
}, {
  "price": 550,
  "color": "tariff_550",
  "speed": 100,
  "isSelected": true
}, {
  "price": 1000,
  "color": "tariff_1000",
  "speed": 200,
  "isSelected": false
}]

function App() {
  return (
    <div className="App">
      <Row justify='center'>
        {
          tariffs.map((tariff) =>
            <TariffCard title={title} price={tariff.price} color={tariff.color}
              speed={tariff.speed} details={details} isSelected={tariff.isSelected} />)
        }
      </Row>
    </div>
  );
}

export default App;
