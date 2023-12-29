import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Bodycont from "./components/body"
import Headercont from "./components/header"

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]
function App() {
  return (
    <div>
      <Headercont className="head" />
      <Bodycont images={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
