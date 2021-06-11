import React from 'react';
import './Clock.css';


/**
 * A simple digital clock
 */
export default class Clock extends React.Component {

    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = {};
        this.timerId = null;
    }

    /**
     * Take an number (Number|String) and return
     * a zero-padded string of length 2 if digits can
     * be converted, else return '--' to keep a consistent display
     */
    static padZero(digits) {
        if (Number.isNaN(digits = parseInt(digits, 10)))
            return '--';
        return digits.toString().padStart(2, '0');
    }

    /**
     * Update state with current time
     */
    tick = () => {
        let currentTime = new Date();
        this.setState({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        });
    }

    /**
     * The clock has been inserted into the DOM
     */
    componentDidMount() {
        // First update the time and setup a timer
        this.tick();
        this.timerId = setInterval(this.tick, 1000);
    }

    /**
     * The clock will be removed from the DOM
     */
    componentWillUnmount() {
        // Remove the timer
        clearInterval(this.timerId);
    }

    /**
     * Render this component
     */
    render() {
        let { hours, minutes, seconds } = this.state;
        return (
            <div className='Clock'>
                {Clock.padZero(hours)}:{Clock.padZero(minutes)}:{Clock.padZero(seconds)}
            </div>
        );
    }
}
