import './App.css';
import LeftInfo from './sections/leftInfo';
import RightInfo from './sections/rightInfo';
import Search from './sections/search';
import useWeatherStore from './hooks/useStore';

function App() {
  const { city } = useWeatherStore();
  return (
    <main id='app'>
      <div id='container'>
        <Search />
        {city && <section id='infoCont'>
          <LeftInfo />
          <RightInfo />
        </section>}
      </div>
    </main>
  )
}

export default App
