import React, { Component } from 'react';
import { connect } from 'react-redux';
import CodeBlock from '../../components/Component/CodeBlock';

@connect(
    state => ({
        settingReducer: state.settingReducer
    })
)
export default class CodeBlockContainer extends Component {
    render() {
        return (
            <CodeBlock  {...this.props} />
        )
    }
}
