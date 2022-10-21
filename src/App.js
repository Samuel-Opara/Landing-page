import './App.css';
import Head from './Header';
import Section1 from './section';
import Deco from './decoration1';
import Service from './servicecard';
import Course from './courses';
import Blog from './blog';

function App() {
  return (
    <div>
    <Head />
    <Deco />
    <Section1 />
    <Service />
    <Course />
    <Blog />
    </div>
  );
}

export default App;
