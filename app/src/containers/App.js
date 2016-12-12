import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Setting from '../components/Setting';
import CodeBlock from '../components/CodeBlock';

import * as settingAction from '../actions/settingAction';

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
        width: '60%',
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

    const { componentName, group } = this.props.settingReducer;
    const { changeName } = this.props.settingAction;

    return (
        <div style={{height: '100%'}}>
            <div style={styles.setting_area}>
                <Setting
                    componentName={componentName}
                    changeName={changeName}
                    group={group}
                />
            </div>
            <div style={styles.code_area}>
                <CodeBlock 
                    componentName={componentName}
                />
            </div>     
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        settingReducer: state.settingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingAction: bindActionCreators(settingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);