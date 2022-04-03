import logo from './logo.svg';
import './App.css';
import './Component/Contact'
import Contact from './Component/Contact';
import Page1 from './Component/Dashboard/page1.js';
import Page2 from './Component/Dashboard/page2';
import Page3 from './Component/Dashboard/page3';

function App() {
  return (
    <div className="flex flex-row">
      <Contact></Contact>
      <Page1></Page1>
      {/* <Page2></Page2> */}
      {/* <Page3></Page3> */}



    </div>
  );
}

export default App;
