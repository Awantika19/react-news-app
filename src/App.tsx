import './App.css';
import Header from './components/organisms/Navigation/Header';
import {NewsAppProvider} from './components/organisms/context/NewsAppProvider';
import HomeComponent from './components/pages/Home';

function App() {
  return (
    <>
      <NewsAppProvider>
        <Header title={'React News App'} />
        <HomeComponent />
      </NewsAppProvider>
    </>
  );
}

export default App;
