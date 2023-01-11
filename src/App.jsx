import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { LuckyWheel } from "@lucky-canvas/react";
function App() {
  const [blocks] = useState([{ padding: "10px", background: "#b8c5f2" }]);
  const [prizes] = useState([
    { background: "#e9e8fe", fonts: [{ text: "吕泓炜" }] },
    { background: "#e9e8fe", fonts: [{ text: "谭家豪" }] },
    { background: "#e9e8fe", fonts: [{ text: "钟家骏" }] },
    { background: "#e9e8fe", fonts: [{ text: "梁志豪" }] },
    { background: "#e9e8fe", fonts: [{ text: "邓轲" }] },
    { background: "#e9e8fe", fonts: [{ text: "匡平" }] },
    { background: "#e9e8fe", fonts: [{ text: "彭翼" }] },
    { background: "#e9e8fe", fonts: [{ text: "余红伟" }] },
    { background: "#e9e8fe", fonts: [{ text: "李俊谚" }] },
    { background: "#e9e8fe", fonts: [{ text: "杜萌雨" }] },
    { background: "#e9e8fe", fonts: [{ text: "赵文鑫" }] },
    { background: "#e9e8fe", fonts: [{ text: "唐一峰" }] },
    { background: "#e9e8fe", fonts: [{ text: "李超" }] },
    { background: "#e9e8fe", fonts: [{ text: "陈丹婷" }] },
    { background: "#e9e8fe", fonts: [{ text: "张龙" }] },
    { background: "#e9e8fe", fonts: [{ text: "任晋光" }] },
    { background: "#e9e8fe", fonts: [{ text: "张子扬" }] },
    { background: "#e9e8fe", fonts: [{ text: "任晋光" }] },
    { background: "#e9e8fe", fonts: [{ text: "张龙" }] },
    { background: "#e9e8fe", fonts: [{ text: "李昂" }] },
    { background: "#e9e8fe", fonts: [{ text: "张超越" }] },
    { background: "#e9e8fe", fonts: [{ text: "简颖" }] },
    { background: "#e9e8fe", fonts: [{ text: "车路" }] },
    { background: "#e9e8fe", fonts: [{ text: "费澳" }] },
    { background: "#e9e8fe", fonts: [{ text: "费澳" }] },
    { background: "#e9e8fe", fonts: [{ text: "谢鸿翔" }] },
    // { background: "#b8c5f2", fonts: [{ text: "" }] },
  ]);
  const total = [
    { background: "#e9e8fe", fonts: [{ text: "吕泓炜" }] },
    { background: "#b8c5f2", fonts: [{ text: "谭家豪" }] },
    { background: "#e9e8fe", fonts: [{ text: "钟家骏" }] },
    { background: "#b8c5f2", fonts: [{ text: "梁志豪" }] },
    { background: "#e9e8fe", fonts: [{ text: "邓轲" }] },
    { background: "#e9e8fe", fonts: [{ text: "匡平" }] },
    { background: "#e9e8fe", fonts: [{ text: "彭翼" }] },
    { background: "#e9e8fe", fonts: [{ text: "余红伟" }] },
    { background: "#e9e8fe", fonts: [{ text: "李俊谚" }] },
    { background: "#e9e8fe", fonts: [{ text: "杜萌雨" }] },
    { background: "#e9e8fe", fonts: [{ text: "赵文鑫" }] },
    { background: "#e9e8fe", fonts: [{ text: "唐一峰" }] },
    { background: "#e9e8fe", fonts: [{ text: "李超" }] },
    { background: "#e9e8fe", fonts: [{ text: "陈丹婷" }] },
    { background: "#e9e8fe", fonts: [{ text: "张龙" }] },
    { background: "#e9e8fe", fonts: [{ text: "任晋光" }] },
    { background: "#e9e8fe", fonts: [{ text: "张子扬" }] },
    { background: "#e9e8fe", fonts: [{ text: "任晋光" }] },
    { background: "#e9e8fe", fonts: [{ text: "张龙" }] },
    { background: "#e9e8fe", fonts: [{ text: "李昂" }] },
    { background: "#e9e8fe", fonts: [{ text: "张超越" }] },
    { background: "#e9e8fe", fonts: [{ text: "简颖" }] },
    { background: "#e9e8fe", fonts: [{ text: "车路" }] },
    { background: "#e9e8fe", fonts: [{ text: "费澳" }] },
    { background: "#e9e8fe", fonts: [{ text: "费澳" }] },
    { background: "#e9e8fe", fonts: [{ text: "谢鸿翔" }] },
    // { background: "#b8c5f2", fonts: [{ text: "" }] },
  ];
  useEffect(() => {
    console.log(total.length);
  }, []);
  const [buttons] = useState([
    { radius: (1 / total.length) * 100 + "%", background: "#617df2" },
    // { radius: "10%", background: "#afc8ff" },
    {
      radius: "30%",
      background: "#869cfa",
      pointer: true,
      fonts: [{ text: "开始", top: "-10px" }],
    },
  ]);
  const myLucky = useRef();
  return (
    <div className="App">
      <LuckyWheel
        ref={myLucky}
        width="400px"
        height="400px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => {
          // 点击抽奖按钮会触发star回调
          myLucky.current.play();
          setTimeout(() => {
            const index = (Math.random() * 26) >> 0;
            console.log(index);  
            myLucky.current.stop(index); 
          }, 2500);
        }}
        onEnd={(prize) => {
          // 抽奖结束会触发end回调
          alert("恭喜 " + prize.fonts[0].text);
        }}
      />
    </div>
  );
}

export default App;
