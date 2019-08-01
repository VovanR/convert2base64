import React, {Component} from 'react';
import './Output.css';

class Output extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hash: ''
		};
	}

	componentDidMount() {
		const reader = new window.FileReader();

		reader.readAsDataURL(this.props.file);

		reader.onloadend = () => {
			this.setState({
				hash: reader.result
			});
		};
	}

	render() {
		if (!this.state.hash) {
			return null;
		}

		return (
			<textarea
				className="output"
				value={this.state.hash}
				readOnly
			/>
		);
	}
}

export default Output;
