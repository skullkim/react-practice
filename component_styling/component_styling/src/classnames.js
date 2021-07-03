import React from 'react';
import classNames from "classnames";

const MyComponent = ({highlited, theme}) => {
    return (
        <div className={classNames('MyComponent', {highlited}, theme)}>
            Hello
        </div>
    )
}

export default MyComponent;