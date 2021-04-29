
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM
    <div className="app">
      {/*<h1 style={{textAlign:"center", fontWeight:1000}}>Welcome Shreyas</h1>*/}

      {/* SideBar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
