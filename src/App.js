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


const app = new Clarifai.App({
	apiKey:'d35a2ce4406d4e61807585fc37df1e33'
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input:'',
			imgUrl:''
		}
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
		console.log( this.state.imgUrl );
		app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
			function(response){
				console.log(response.outputs[0].data.regions[0].region_info.bounding_box );
			},
			function(err){

			}
		)
	}

	render(){
		return (
			<div className="App">
				{/* <Particles className="particles" id="tsparticles" options={particleOptions} /> */}
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm 
					onInputChange = {this.onInputChange } 
					onSubmitButton = {this.onSubmitButton}
				/>
				<FaceRecognition imgUrl={this.state.imgUrl} />
			</div>
		);
	}
}

export default App;
