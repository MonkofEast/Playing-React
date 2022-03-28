import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // not required, for JS, not react
    // will be auto called with props obj
    // constructor(props) {
    //     // have to call super()!!
    //     // call func in React.Component
    //     super(props);

    //     // init state obj as default null!!!!
    //     // null means don't know for now
    //     // This is the only time we do direct assignment to this.state
    //     // other time we always call setState()
    //     this.state = { lat: null, errorMessage: "" };
    // }

    // bable wiil convert this line into the lines above...
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // does not called until we get responses!!!!!
            // when called, re-render
            // call setState to update state!!
            // almost instantly update
            // not required to update all attributes
            position => this.setState({ lat: position.coords.latitude }),
            // DO NOT!!!!
            // this.state.lat = position.coords.latitude
            err => this.setState({ errorMessage: err.message })

        );
    }


    componentDidUpdate() {
        console.log("My component was updated: re-rendered!")
    }

    // helper
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div><Spinner message="Please accept location request..." /></div>
    }

    // have to define render()!!
    render() {
        return (
            <div className="board-red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))