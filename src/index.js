import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
  state = { lat: null, errMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => this.setState({ errMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>
      }
  
      if (!this.state.errMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
      
      return <Spinner />;
  }

  render() {
    return <div className="red border">
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));