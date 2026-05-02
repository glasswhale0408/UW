import PostCard from "./PostCard";
import "./PostList.css"

function PostList ({posts, onDelete}) {
    return(
        <div className="list">
            {posts.map((post, i) => 
            <PostCard key={i} {...post} onDelete={onDelete}/>)}
        </div>
    )
}

export default PostList;