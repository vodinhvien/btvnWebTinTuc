import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import MenuBar from './MenuBar';
function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
        <div id="menubar">
          <MenuBar />
        </div>
      </div>
      <div class="clearfix"></div>
      <div id="navi">
        <NavBar />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}


export default App;
