import logo from './logo.svg';
import './App.css';
import { MyContext } from './mycontext';
import { useState } from 'react';
import TopAppBar from './appbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { routes } from './routes';


function App() {

  const [context,setContext] = useState([])

  return (
    <MyContext.Provider value={{context,setContext}}>
      <Router>
         <TopAppBar/>
         <Routes>
          {
            routes.map((ele,i)=>{

              return <Route path={ele.path} element={ele.component} key={i}/>

            })
          }
         </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
