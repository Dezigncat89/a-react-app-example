import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'



class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {alert(Now)}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>

<div className="App">
  <header className="App-header">
    {moment().format('MMMM Do YYYY, h:mm:ss a')}
  </header>
  <p className="App-intro">
    In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
    JSX lets us include JavaScript functions right along with the HTML, and also
    allows us to add in components, which are separate, self-contained chunks of JSX.
  </p>
  <ExampleComponent />
  <TestComponent />
</div>

class TestComponent extends Component {
  render() {
    return (
      <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5TbUxGZtwGI" frameBorder="0" allow="autoplay; encrypted-media" title="time video" allowFullScreen></iframe>
      </div>
    );
  }
}

export default TestComponent;




    );
  }
}

export default App;
