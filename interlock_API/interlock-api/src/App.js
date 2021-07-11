import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setDate] = useState(null);
      const onClick = async () => {
          try{
              //  가짜 API를 호출할 수 있는 사이트
              const response = axios.get('https://jsonplaceholder.typicode.com/todos/1');
              setDate(response.data);
          }
          catch(err) {
              console.error(err);
          }
      }

  return (
      <div>
        <div>
          <button onClick={onClick}>call</button>
          {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
      </div>
  );
}

export default App;
