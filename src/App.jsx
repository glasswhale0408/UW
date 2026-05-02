import { use, useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputBox from './components/InputBox'
import PostList from './components/PostList'
import Ticker from './components/Ticker'

function App() {
  const initialPosts=[
    {
      id:1,
      title:"이누단수장",
      content:"우연히 알게 되었는데 정말 뭐든 해주시나요? 우리 이누형님이 사라졌어요!! 이럴 사람이 아닌데 진짜 감쪽같이 소식이 두절되었거등요? 다른 참정한테도 연락했는데 돌아오는 말도 없고. 사람 하나 살린다고 치고 좀 부탁드립니다!",
      time:"3시간 전"
    },
    {
      id:2,
      title:"타오우",
      content:"언더시티 쪽에 돈을 안 갚는 뭐같은 새끼들이 좀 있거든. 근데 어제 정비를 받아가꼬 파견나가기 귀찮단 말야. 여기서 추심도 해준다고 했을니까 받아주는거지?",
      time:"7시간 전"
    },
    {
      id:3,
      title:"익명의 오소리",
      content:"저 여기 사장님. 선글라스 낀 아저씨죠. 아저씨 진짜 제 취향인데. 혹시 담당자분. 보고있으면. 어떻게 연결 좀. 안될까요. 네 번째 삭제하시는 거 알아요.",
      time:"10시간 전"
    },
    {
      id:4,
      title:"RingRing",
      content:"요즘 저를 스토킹하는 사람이 있는데 약속이 있어요. 제가 안전하게 파티를 다녀오고 집에 들어올 수 있도록 호위같은 것도 부탁해도 됩니까?",
      time:"3일 전"
    },
  ];

  const [posts, setPosts]=useState(initialPosts);
  
  const addPost= (text,client) => {
    const newPost={
      id: Date.now(),
      title: client,
      content: text,
      time: "방금 전"
    };
    setPosts([newPost, ...posts]);
  };

  const deletePost= (id) =>{
    const filtered= posts.filter((post)=> post.id!==id);
    setPosts(filtered);

  };

  return (
    <div className='app' >
      <Header/>
       <div className='scroll-area'>
       <InputBox onAdd={addPost}/>
       <PostList posts={posts} onDelete={deletePost}/>
       </div>
      <Ticker/>
    </div>
  )
}

export default App
