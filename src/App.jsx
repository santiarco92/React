import logo from './logo.svg';
import './App.css';
import Avatar from './atoms/avatar';
import Badge from './atoms/badge';
import Card from './atoms/card';
import Footer from './atoms/footer';
import Header from './atoms/header';

function App() {
  return (
    <div>
    <Header title={"React Beginner's Quiz"}/> 
    <Card title={"card 1"} content={"card 1 content"}/>
    <Card title={"card 2"} content={"card 2 content"}/>
    <Badge label={"New!"}/>
    <Card title={"card 3"} content={"card 3 content"}/>
    <Avatar imageSrc={"https://concepto.de/wp-content/uploads/2019/04/codigo-fuente-e1554759455373.jpg"} description={"code"}/>
    <Footer content="Created with ❤️ by Santiago Arroyave"/>
    
    </div>
  );
}

export default App;
