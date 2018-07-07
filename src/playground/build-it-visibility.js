class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.state = {
			visible: false		
		};
	}
	toggleVisibility() {
		this.setState( (prevState) => {
			return {
				visible: !prevState.visible
			}
		});
	}	
	render() {
		return (
			<div>
				<button onClick={this.toggleVisibility} >{this.state.visible ? 'Hide' : 'Show'} details</button>
				{this.state.visible && (
					<p>Hey these are some details</p>
				)}
			</div>
		)
	}
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// console.log('app.js is running');

// let visible = false;

// const toggleVisibility = () => {
// 	visible = !visible;
// 	render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
// 	const jsx = (
// 		<div>
// 			<button onClick={toggleVisibility} >{visible ? 'Hide' : 'Show'} details</button>
// 			{visible && (
// 				<p>Hey these are some details</p>
// 			)}
// 		</div>
// 	);
// 	ReactDOM.render(jsx, appRoot);
// }

// render();