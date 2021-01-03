import React, {useState, useEffect} from 'react';
import './app.css';

const App = () => {
    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{name:'Ivan', sex: 'male'}]);

    if (data){
        useEffect(() => {
            console.log(data)
        });
    }

    return (
       <div>
           <p>Вы кликнули {count} раз</p>
            <button
                onClick={() => setCount(count + 1)}
            >Кликни</button>
            
            {data.map(item => {
                return <div>Name: {item.name}, gender: {item.sex}</div>
            })}
            <button
                onClick={() => refreshData(data => ([...data,{name:'Alex', sex: 'male'}]))}
            >Добавить данные</button>
       </div>

    )

}

export default App;