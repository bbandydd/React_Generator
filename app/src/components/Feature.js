import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    container: {
        marginBottom: '30px'
    },
    title: {
        margin: '10px'
    },
    button: {
        display: 'inline-block',
        margin: '5px'
    },
    clicked: {
        backgroundColor: 'rgb(0, 188, 212)'
    }
}

const Feature = ({ text, children }) => (
    <div style={styles.container}>
        <p style={styles.title}>
            {text}
        </p>
        <div>
            {children.map((obj, idx) => (
                <Chip
                    key={`Chip_${idx}`}
                    onTouchTap={() => {}}
                    style={obj.clicked ? {...styles.button, ...styles.clicked} : styles.button}
                >
                    {obj.name}
                </Chip>
            ))}
        </div>
    </div>
);

export default Feature;