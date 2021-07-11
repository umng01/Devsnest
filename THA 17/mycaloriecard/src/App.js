import './App.css';
import Card from './card.jsx';

function App(props) {
  return (
    <div className="App">
    <h1>Umang's Calorie Chart this week</h1>
    <div className="container">
      <Card title='Pizza' calorie='56' />
      <Card title='Burger' calorie='69'/>
      <Card title='Coke'calorie='500'/>
      <Card title='Brownie'calorie='180' />
      <Card title='Fried Rice'calorie='90'/>
      <Card title='Lassania'calorie='200'/>
      <Card title='Pani Puri'calorie='10'/>
      </div>
    </div>
  );
}

export default App;