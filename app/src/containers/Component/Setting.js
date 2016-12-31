import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TextField from 'material-ui/TextField';

import * as settingAction from '../../actions/Component/settingAction';
import Feature from '../../components/Component/Feature';

@connect((state) => {
    return {
        settingReducer: state.settingReducer
    }
}, (dispatch) => {
    return {
        settingAction: bindActionCreators(settingAction, dispatch)
    }
})
export default class Setting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { componentName, group } = this.props.settingReducer;
        const { changeName, toggleButton } = this.props.settingAction;

        return (
            <div>
                <TextField
                    value={componentName}
                    floatingLabelText="Component Name"
                    onChange={changeName}
                    style={{margin: '0px 10px 20px 10px'}}
                />
                {group.map((obj, idx) => (
                    <Feature 
                        key={`Feature_${idx}`} 
                        parentIndex={idx} 
                        text={obj.text} 
                        children={obj.children} 
                        toggleButton={toggleButton}
                    />
                ))}
            </div>
        )
    }
};