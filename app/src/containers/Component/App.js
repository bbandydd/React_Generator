import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Setting from './Setting';
import CodeBlock from './CodeBlock';

const styles = {
    setting_area: {
        float: 'left',
        width: 'calc(40% - 40px)',
        height: '100%',
        padding: '20px',
        backgroundColor: '#eee'
    },
    code_area: {
        float: 'left',
        width: 'calc(60% - 40px)',
        padding: '20px'
    }
}

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
        <div style={{height: '100%'}}>
            <div style={styles.setting_area}>
                <Setting />
            </div>
            <div style={styles.code_area}>
                <CodeBlock />
            </div>     
        </div>
    );
  }
}

export default App;