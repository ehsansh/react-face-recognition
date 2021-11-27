
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import particleOptions from './particleOptions';

function App() {



  return (
    <div className="App">
		{/* <Particles className="particles" id="tsparticles" options={particleOptions} /> */}
		<Navigation />
		<Logo />
    <Rank />
		<ImageLinkForm />
    </div>
  );
}

export default App;
