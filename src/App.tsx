import './App.css';
import HeaderNavigationMenu from './components/organisms/Navigation/HeaderNavigationMenu';
import {NewsAppProvider} from './components/organisms/context/NewsAppProvider';
import HomeComponent from './components/pages/Home';

function App() {
  return (
    <>
      <NewsAppProvider>
        <HeaderNavigationMenu title={'React News App'} />
        <HomeComponent />
      </NewsAppProvider>
    </>
  );
}

export default App;
