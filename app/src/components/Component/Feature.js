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

const Feature = ({ parentIndex, text, children, toggleButton }) => (
    <div style={styles.container}>
        <p style={styles.title}>
            {text}
        </p>
        <div>
            {children.map((obj, index) => (
                <Chip
                    key={`Chip_${index}`}
                    style={obj.clicked ? {...styles.button, ...styles.clicked} : styles.button}
                    onTouchTap={()=> toggleButton({parentIndex, index})}
                >
                    {obj.name}
                </Chip>
            ))}
        </div>
    </div>
);

export default Feature;