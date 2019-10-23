import React from 'react';

class Clock extends React.Component {
    interval;
    constructor(props) {
        super(props);
        this.state = {time: getHours()};
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: getHours()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (<p>{this.state.time}</p>);
    }
}

function getHours() {
    return new Date().toLocaleTimeString();
}

export default Clock;