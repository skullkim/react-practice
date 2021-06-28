import React from 'react';

const IterationSample = () => {
    const names = ['1', '2', '3'];
    const name_list = names.map((name, idx) => <li key={idx}>{name}</li>)
    return <ul>{name_list}</ul>
};

export default IterationSample;