import React, { Component } from "react"
import "./app.css"
import Clock from "./clock"

//Declare a ES6 Class, extend Reacts components with our class and inherit all of their default methods.
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			deadline: "December 25, 2017",
			newDeadline: "",
		}
	}

	changeDeadline() {
		console.log("state", this.state)
		this.setState({ deadline: this.state.newDeadline })
	}
	render() {
		return (
			<div className="App">
				<div className="app-title">Countdown to {this.state.deadline} </div>

				<Clock deadline={this.state.deadline} />
				{/*Import Clock code here, pass deadline prop for clock.jsx to use as a prop*/}
				<div>
					<input
						className="input-date"
						placeholder="new Date"
						onChange={event =>
							this.setState({ newDeadline: event.target.value })}
					/>
					{/*Set state of deadline with whatever is in the input*/}

					<button onClick={() => this.changeDeadline()}>Submit</button>
					{/*Change sttate on click by running the changeDeadline method*/}
				</div>
			</div>
		)
	}
}

//export, able to use App tag
export default App
