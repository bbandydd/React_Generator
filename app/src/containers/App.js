import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Setting from '../components/Setting';
import CodeBlock from '../components/CodeBlock';

import * as settingAction from '../actions/settingAction';

const styles = {
    setting_area: {
        float: 'left',
        width: 'calc(30% - 40px)',
        height: '100%',
        padding: '20px',
        backgroundColor: '#eee'
    },
    code_area: {
        float: 'left',
        width: '70%',
    }
}

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render(){

    const { setting, settingAction } = this.props;

    return (
        <div style={{height: '100%'}}>
            <div style={styles.setting_area}>
                <Setting
                    componentName={setting.componentName}
                    changeName={settingAction.changeName}
                />
            </div>
            <div style={styles.code_area}>
                <CodeBlock 
                    componentName={setting.componentName}
                />
            </div>     
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        setting: state.settingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingAction: bindActionCreators(settingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);