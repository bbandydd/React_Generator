import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import settingAction from '../../actions/Component/settingAction';
import Setting from '../../components/Component/Setting';

@connect(
    state => ({
        settingReducer: state.settingReducer
    }), 
    dispatch => ({
        settingAction: bindActionCreators(settingAction, dispatch)
    })
)
export default class SettingContainer extends Component {
    render() {
        return (
            <Setting {...this.props} />
        )
    }
}