
import { Link, Outlet } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className = "App-ul">
          <li className = "Link"><Link className = "Linklink1" to ="/">Home</Link></li>
          <li className = "Link2"><Link className = "Linklink2" to ="/projects">Projects</Link></li>
        </ul>
       </header>

       <main>
         <Outlet></Outlet>
       </main>
    </div>
  );
}

export default App;
