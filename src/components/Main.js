require('normalize.css/normalize.css');
require('styles/App.css');

import $ from 'jquery'
import React from 'react';

class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = { population: []};
  }

  componentDidMount() {
    this.GetData();
  }

  GetData() {
    return $.getJSON('http://api.population.io:80/1.0/countries')
      .then((data) => {
        this.setState({ population: data.countries })
      })
  }

  render() {

    const pops = this.state.population;

    return (
      <div>
        Query Component {pops}
      </div>
    );
  }
}


class AppComponent extends React.Component {
  render() {
    return (
      <div className="page-wrap">
      	World Population
        <Query />
        USA Population
        Shortest Country Names
        Check Your Ranking
    	</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
