import React, { Component } from "react"
import "./app.css"

class Clock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
		console.log("this.props", this.props)
	}
	//runs before component mounts to application
	componentWillMount() {
		this.getTimeUntil(this.props.deadline)
	} //runs after compontent has mounted to application
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
	}
	leading0(num) {
		return num < 10 ? "0" + num : num
	}

	/*
Method getTimeUntil, subtract passed Deadline for holiday subtract current date using built in JS methods
*/
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date())
		console.log("time", time) //console.log
		//Calculate seconds
		const seconds = Math.floor((time / 1000) % 60)
		const minutes = Math.floor((time / 1000 / 60) % 60)
		const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
		const days = Math.floor(time / (1000 * 60 * 60 * 24))

		this.setState({
			days,
			hours,
			minutes,
			seconds,
		})
	}
	render() {
		return (
			<div>
				<div className="clock-days"> {this.leading0(this.state.days)} Days</div>
				<div className="clock-hours">
					{this.leading0(this.state.hours)} hours
				</div>
				<div className="clock-minutes">
					{this.leading0(this.state.minutes)} Minutes
				</div>
				<div className="clock-seconds">
					{" "}
					{this.leading0(this.state.seconds)} Seconds
				</div>
			</div>
		)
	}
}
export default Clock
