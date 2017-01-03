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
        
        // link
        importBlock.push(
            group[1].children.filter(x=>x.clicked).length > 0
                ?  `
            import { Link } from 'react-router';`
                : ``
        )

        // redux
        importBlock.push(
            group[2].children.filter(x => x.clicked && x.name=='connect').length > 0
                ?  `
            import { connect } from 'react-redux';
            import { bindActionCreators } from 'redux'
            import * as action from 'yourPath/indexAction'`
                : ``
        )
    
        return importBlock.join('') + `
        `;
    }

    getContent = () => {
        const { componentName, group } = this.props.settingReducer;

        const lifecycle = group[0].children
            .filter(x=>x.clicked)
            .map((obj) => (`
                ${obj.name}() {

                }
            `))
        
        const Link = group[1].children
            .filter(x=>x.clicked && x.name=='Link')
            .map((obj) => (`
                            <Link to="/path">Link</Link>`
            ))

        const props = group[2].children.filter(x => x.clicked && x.name=='connect').length > 0 
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
        const { group } = this.props.settingReducer;

        return group[2].children.filter(x => x.clicked && x.name=='connect').length > 0 
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

        return group[2].children.filter(x => x.clicked && x.name=='connect').length > 0 
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