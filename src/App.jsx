import { use, useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputBox from './components/InputBox'
import PostList from './components/PostList'
import Ticker from './components/Ticker'

function App() {
  const [posts, setPosts]=useState([]);
  
  const addPost= (text,client) => {
    const newPost={
      title: client,
      content: text,
      time: "방금 전"
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className='app' >
      <Header/>
       <div className='scroll-area'>
       <InputBox onAdd={addPost}/>
       <PostList posts={posts}/>
       </div>
      <Ticker/>
    </div>
  )
}

export default App
