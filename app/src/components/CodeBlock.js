import React, { Component } from 'react';

const CodeBlock = ({ componentName }) => {
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
};

export default CodeBlock;