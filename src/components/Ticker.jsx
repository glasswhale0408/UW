import "./Ticker.css"

function Ticker () {
  const news =[
    "🔷 개조인간 출입 제한 구역 확대. '퓨어'들만의 리그 공고화",
    "🟣 어느 폐기물 처리장에서 들리는 노랫소리... 도시괴담 확산",
    "🔴 철골파 하부 조직, 항만 창고 일대에서 수상한 움직임 포착",
    "🟡 [광고] 도시의 밤을 수놓는 빛, 옥외광고의 명가 '오로라테일즈'"
  ]

  return (
    <div className="Ticker">
       <div className="track">
         {news.map((item,i)=> (
        <span key={i}>{item}</span>
      ))}
       </div>
    </div>
  )
}

export default Ticker