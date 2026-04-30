import { useState } from "react"
import "./InputBox.css"

function InputBox({onAdd}) {
    const [text, setText]=useState("");
    const [client, setClient] = useState("")
    const handleSubmit =()=>{
        if(!text.trim() || !client.trim()) return;
        onAdd(text,client);
        setText("");
        setClient("");
    }


    return (
     <div className="box">
        <textarea 
          className="textarea1"
          value={client}
          onChange={(e)=>setClient(e.target.value)}
          placeholder="의뢰자 명을 입력하세요....">
        </textarea>
        <textarea
         className="textarea2" 
         value={text}
         onChange={(e)=>setText(e.target.value)}
         placeholder="문의 내용을 입력하세요....">
        </textarea>
        <button onClick={handleSubmit} className="button">전송</button>
     </div>
    )

}
export default InputBox