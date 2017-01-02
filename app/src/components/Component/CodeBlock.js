import React, { Component } from 'react';

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

        let importBlock =[`
            import React, { Component } from 'react';`];

        let router = [];
        group[1].children.filter(x=>x.clicked).forEach((obj) => {
            router.push( `
            import { Link } from 'react-router';`);
        });
        importBlock.push(router.join(''));

        let redux = [];
        group[2].children.filter(x=>x.clicked).forEach((obj) => {
            redux.push(`
            import { connect } from 'react-redux';`);
        })
        importBlock.push(redux.join(''));

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;
        let action = connectEnable
        ? `
            import { bindActionCreators } from 'redux';
            import * as action from 'yourPath/indexAction';`
        : ``;
        importBlock.push(action);
       
        return importBlock.join('') + `
        `;
    }

    getContent = () => {
        const { componentName, group } = this.props.settingReducer;

        let lifecycle = [];
        group[0].children.filter(x=>x.clicked).forEach((obj) => {
            lifecycle.push(`
                ${obj.name}() {

                }
            `);
        })

        let Link = [];
        group[1].children.filter(x=>x.clicked && x.name=='Link').forEach((obj) => {
            Link.push(`
                            <Link to="/path">Link</Link>`);
        })

        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;
        const props = connectEnable 
        ? `
                    const { reducer, action } = this.props;
        `
        :``;

        return `
            class ${componentName} extends Component {
                constructor(props) {
                    super(props);
                }
                ${lifecycle.join('')}
                render() {${props}
                    return (
                        <div>
                            This is ${componentName}${Link.join('')}
                        </div>
                    )
                }
            }
        `;
    }

    getMapFunction = () => {
        const { componentName, group } = this.props.settingReducer;
        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;

        return connectEnable 
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
    }

    getExportBlock = () => {
        const { componentName, group } = this.props.settingReducer;
        const connectEnable = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0;

        return connectEnable 
            ? `
                export default connect(
                    mapStateToProps, 
                    mapDispatchToProps
                )(${componentName});
                `
            :  `
                export default ${componentName};
                `;
    }
};