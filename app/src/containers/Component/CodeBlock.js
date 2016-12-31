import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({
        settingReducer: state.settingReducer
    })
)
export default class CodeBlock extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        return (
            <pre key={new Date().getTime()}>
                <code className="language-javascript">
                    {this.getImportBlock()}
                    {this.getContent()}
                    {this.getMapFunction()}
                    {this.getExportBlock()}
                </code>
            </pre> 
        ) 
    }

    getImportBlock = () => {
        const { componentName, group } = this.props.settingReducer;

        let importBlock = 
        `
            import React, { Component } from 'react';`

        let router = '';
        group[1].children.filter(x=>x.clicked).forEach((obj) => {
            router += 
            `
            import { Link } from 'react-router';`
        });
        importBlock += router;

        let redux = '';
        group[2].children.filter(x=>x.clicked).forEach((obj) => {
            redux +=
            `
            import { connect } from 'react-redux';`
        })
        importBlock += redux;

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;
        let action = connectEnable
        ? `
            import { bindActionCreators } from 'redux';
            import * as action from 'yourPath/indexAction';`
        : ``;
        importBlock += action;
       
        return importBlock + `
        `;
    }

    getContent = () => {
        const { componentName, group } = this.props.settingReducer;

        let lifecycle = ``;
        group[0].children.filter(x=>x.clicked).forEach((obj) => {
            lifecycle += 
            `
                ${obj.name}() {

                }
            `            
        })

        let Link = ``;
        group[1].children.filter(x=>x.clicked && x.name=='Link').forEach((obj) => {
            Link += 
            `
                            <Link to="/path">Link</Link>`
        })

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;
        let props = connectEnable 
        ? `
                    const { reducer, action } = this.props;
        `
        :``;
        
        const content =
        `
            class ${componentName} extends Component {
                constructor(props) {
                    super(props);
                }
                ${lifecycle}
                render() {${props}
                    return (
                        <div>
                            This is ${componentName}${Link}
                        </div>
                    )
                }
            }
        `

        return content;
    }

    getMapFunction = () => {
        const { componentName, group } = this.props.settingReducer;

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;

        let mapFunction = connectEnable 
            ? `
            const mapStateToProps = (state) => {
                return {
                    reducer: state.reducer
                }
            }

            const mapDispatchToProps = (dispatch) => {
                return {
                    action: bindActionCreators(action, dispatch)
                }
            }
            `
            : ``;

        return mapFunction;
    }

    getExportBlock = () => {
        const { componentName, group } = this.props.settingReducer;

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;

        let exportBlock = ``;

        if (connectEnable) {
            exportBlock = 
            `
            export default connect(
                mapStateToProps, 
                mapDispatchToProps
            )(${componentName});
            `
        } else {
            exportBlock = 
            `
            export default ${componentName};
            `
        }

        return exportBlock;
    }
};