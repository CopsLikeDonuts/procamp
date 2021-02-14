
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <>
      <Header/>
      <Content state={props.state}
               options={props.options}/>
      <Footer/>
    </>
    
    // <Footer/>
  );
}

export default App;
