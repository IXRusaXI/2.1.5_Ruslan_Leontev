import './App.scss';
import { TodoList } from './TodoList/TodoList';
import {useState, useEffect} from 'react'

const App = () => {
  const [postList, setPostList] = useState([])
  // const [count, setCount] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(json => {
      setPostList(json)
    })
  }, [true])

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => {
        setPostList(json)
      })
    }, 5000)

    return () => clearTimeout(timeout)
  })

  return (
    <div className="container">
      <TodoList postList={postList}/>
    </div>
  );
};

export default App;
