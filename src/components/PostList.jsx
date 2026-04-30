import PostCard from "./PostCard";
import "./PostList.css"

function PostList ({posts}) {
    return(
        <div className="list">
            {posts.map((post, i) => 
            <PostCard key={i} {...post}/>)}
        </div>
    )
}

export default PostList;