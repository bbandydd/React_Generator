import React from 'react';
import TextField from 'material-ui/TextField';

import Feature from './Feature';

const Setting = ({ componentName, changeName, group }) => {
    return (
        <div>
            <TextField
                value={componentName}
                floatingLabelText="Component Name"
                onChange={changeName}
                style={{margin: '0px 10px 20px 10px'}}
            />
            {group.map((obj, idx) => <Feature key={`Feature_${idx}`} text={obj.text} children={obj.children} />)}
        </div>
    )
};

export default Setting