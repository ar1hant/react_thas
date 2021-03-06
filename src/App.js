import { Route, Switch } from 'react-router-dom';
import './Main_App.css';
import Card from './components/Day16/task_2/Card';
import Chessboard from './components/Day16/task_1/Chessboard';
import HealthCardList from './components/Day17/HealthCardList';
import ChessboardEnhanced from './components/Day18/ChessboardEnhanced';
import HealthCardListEnhanced from './components/Day18/HealthCardListEnhanced';
import CounterListAll from './components/Day19/CounterListAll';
import HealthCardListWIthDelete from './components/Day20/HealthCardListWIthDelete';
import HealthTodoList from './components/Day21/HealthTodoList';
import MemeList from './components/Day22/MemeList';
import CustomHooks from './components/Day23/customHooks';
import ReactRouter from './components/Day24/ReactRouter';
import UserInputApp from './components/Day26/UserInputApp';
import Todos from './components/Day27/Todos';
import Weather from './components/Day28/Weather';
import WeatherMain from './components/Day29/WeatherMain';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Header />
        <Welcome />
      </Route>
      <Route path='/Day16-Cards'>
        <Header />
        <Card />
      </Route>
      <Route path='/Day16-Chessboard'>
        <Header />
        <Chessboard />
      </Route>
      <Route path='/Day17'>
        <Header />
        <HealthCardList />
      </Route>
        <Route path='/Day18-Chessboard'>
        <Header />
        <ChessboardEnhanced />
      </Route>
      <Route path='/Day18-HealthCard'>
        <Header />
        <HealthCardListEnhanced />
      </Route>
      <Route path='/Day19'>
        <Header />
        <CounterListAll />
      </Route>
      <Route path='/Day20'>
        <Header />
        <HealthCardListWIthDelete />
      </Route>
      <Route path='/Day21'>
        <Header />
        <HealthTodoList />
      </Route>
      <Route path='/Day22'>
        {
          // <Header />
        }
        <MemeList />
      </Route>
      <Route path='/Day23'>
        <Header />
        <CustomHooks />
      </Route>
      <Route path='/Day24'>
        <Header />
        <ReactRouter />
      </Route>
      <Route path='/Day26'>
        <Header />
        <UserInputApp />
      </Route>
      <Route path='/Day27'>
        <Header />
        <Todos />
      </Route>
      <Route path='/Day28'>
        <Header />
        <Weather />
      </Route>
      <Route path='/Day29'>
        {
          // <Header />
        }
        <WeatherMain />
      </Route>
    </div>
  );
}

export default App;