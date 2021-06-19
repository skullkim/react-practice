import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favorite_number, children}) => {
    // const {name, children} = props;
    return (
        <div>
            Hello {name} <br/>
            children: {children}<br/>
            my favorite number: {favorite_number}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default props',
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favorite_number: PropTypes.number.isRequired,
};

export default MyComponent;