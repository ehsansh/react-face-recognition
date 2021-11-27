/* eslint-disable no-unused-vars */

import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from "react-tsparticles";
import particleOptions from './particleOptions';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Clarifai from 'clarifai';
import Singin from './components/Signin/Signin';


const app = new Clarifai.App({
	apiKey:'d35a2ce4406d4e61807585fc37df1e33'
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input:'',
			imgUrl:'',
			box:{},
			route:'signin'
		}
	}

	calculateFaceLocation = (data) =>{
		const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');

		const width = Number(image.width);
		const height = Number(image.height);
		return{
			leftCol:clarifaiface.left_col *width,
			topRow:clarifaiface.top_row *height,
			rightCol:width - (clarifaiface.right_col *width ),
			bottomRow:height - (clarifaiface.bottom_row * height)
		}
	}

	displayFacebox = (box) => {
		console.log(box);
		this.setState({ box:box })
	}

	onInputChange = (event) => {
		this.setState({
			input:event.target.value 
		})
	}
	onSubmitButton = () =>{
		this.setState({
			imgUrl:this.state.input
		})
		app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
		.then(response => this.displayFacebox( this.calculateFaceLocation(response) ) )
		.catch( err => console.log(err) );
	}
	onRouteChange = () =>{
		
	}
	render(){
		return (
			<div className="App">
				{/* <Particles className="particles" id="tsparticles" options={particleOptions} /> */}
				<Navigation />
				{ this.state.route === 'signin' 
				 ? <Singin onRouteChange={this.onRouteChange} />
				: 
				<div>
					<Logo />
					<Rank />
					<ImageLinkForm 
						onInputChange = {this.onInputChange } 
						onSubmitButton = {this.onSubmitButton}
					/>
					<FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
				</div>
				}


			</div>
		);
	}
}

export default App;
