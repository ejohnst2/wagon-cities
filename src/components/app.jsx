import React from 'react';
import City from '../containers/city'
import CityList from '../containers/city_list'
import ActiveCity from '../containers/active_city'
// import cities from '../cities';



const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
