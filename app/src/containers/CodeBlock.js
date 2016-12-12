import React, { Component } from 'react';
import { connect } from 'react-redux';

class CodeBlock extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {

        const { componentName, group } = this.props.settingReducer;

        const importBlock = 
        `
            import React, { Component } from 'react';
        `

        const content =
        `
            class ${componentName} extends Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    const {props} = this;

                    return (
                        <div>
                            ${componentName}
                        </div>
                    )
                }
            }
        `

        const exportBlock = 
        `
            export default ${componentName};
        `

        return (
            <pre key={new Date().getTime()}>
                <code className="language-javascript">
                    {importBlock}
                    {content}
                    {exportBlock}
                </code>
            </pre> 
        ) 
    }
};

const mapStateToProps = (state) => {
    return {
        settingReducer: state.settingReducer
    }
}

export default connect(mapStateToProps)(CodeBlock);