import React from 'react';
import './App.css';
import Cards from '../components/Cards';
import Ciudad from '../components/Ciudad'
import { Route, Routes} from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route
          exact path={'/'}
          element={<Cards/>}
        />
        <Route path={'/ciudad/:cityId'} element={<Ciudad/>} />
      </Routes>
    </div>
  );
}

export default App;