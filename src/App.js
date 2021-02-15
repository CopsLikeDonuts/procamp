
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App(props) {
  console.log(props);
  return (
    <>
      <Header/>
      <Content state={props.state}
               options={props.options}
               titles={props.titles}
               texts={props.texts}/>
      <Footer titles={props.titles.footerTitle}/>
    </>
    
    // <Footer/>
  );
}

export default App;
