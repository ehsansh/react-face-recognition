
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
		<Navigation />
		<Logo />
    <Rank />
		<ImageLinkForm />
    </div>
  );
}

export default App;
