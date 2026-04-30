import "./PostCard.css"

function PostCard({title, content, time}) {
    return (
     <div className="post">
        <div className="total-title">
         <h3 className="title">{title}</h3>
         <span className="time">{time}</span>
        </div>
        <p>{content}</p>
        <div className="btn-group"> 
         <button>답변하기</button>
         <button>차단</button>
        </div>
     </div>
    )
}
export default PostCard