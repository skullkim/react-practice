import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('new');
    const onClickEnter = () => setMessage('Hello');
    const onClickLeave = () => setMessage('Bye');

    const [color, setColor] = useState('black');

    return (
      <div>
          <button onClick={onClickEnter}>enter</button>
          <button onClick={onClickLeave}>leave</button>
          <h1 style={{color}}>{message}</h1>
          <button style={{color: 'red'}} onClick={() => setColor('red')}>
              red
          </button>
          <button style={{color: 'green'}} onClick={() => setColor('green')}>
              green
          </button>
          <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
              blue
          </button>
      </div>
    );
};

export default Say;