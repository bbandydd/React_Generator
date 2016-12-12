import React from 'react';
import TextField from 'material-ui/TextField';

const Setting = ({ componentName, changeName, setting }) => (
    <div>
        <TextField
            value={componentName}
            floatingLabelText="Component Name"
            onChange={changeName}
        />
    </div>
);

export default Setting