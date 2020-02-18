import React from 'react';
import TopBar from './TopBar';
import './App.css';
import SmartWatch from './SmartWatch';


class App extends React.Component {
  
render (){
return(
  <div>
    <TopBar />
    <SmartWatch/>
  </div>
   );
  }
}
export default App;
