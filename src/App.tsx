import './App.scss';
import { TodoList } from './TodoList/TodoList';
import {useState, useEffect} from 'react'

const App = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    console.log('Запуск системы')
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => {
        console.log('Подгрузка-загрузка комплитед', json.length)
        setPostList(json)
      })
    }, 1000)
  }, [])

  return (
    <div className="container">
      <TodoList postList={postList}/>
    </div>
  );
};

export default App;
