import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'ComponentName'
    }
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render(){

    const importBlock = 
    `
      import React, { Component } from 'react';
    `

    const content =
    `
      class ${this.state.name} extends Component {
        constructor() {
          super();
        }

        render() {
          return (
            <div>
              ${this.state.name}
            </div>
          )
        }
      }
    `

    const exportBlock = 
    `
      export default ${this.state.name};
    `

    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.changeName}/>
        <pre key={new Date().getTime()}>
          <code className="language-javascript">
            {importBlock}
            {content}
            {exportBlock}
          </code>
        </pre>       
      </div>
    );
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));
