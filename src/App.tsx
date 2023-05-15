import './App.css';
import Header from './components/organisms/Navigation/Header';
import {PokemonProvider} from './components/organisms/context/NewsAppProvider';
import HomeComponent from './components/pages/Home';

function App() {
  return (
    <>
      <PokemonProvider>
        <Header title={'React News App'} />
        <HomeComponent />
      </PokemonProvider>
    </>
  );
}

export default App;
