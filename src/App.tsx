import './App.scss';
import {PostList}  from './PostList/PostList';
import {useState, useEffect} from 'react'

const App = () => {
  const [postList, setPostList] = useState([])

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
      <PostList postList={postList}/>
    </div>
  );
};

export default App;
