let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫YT,
* 接下来我用动画的方式演示太极图的生成过程
* 首先我要准备一个div
**/
#div1{
   border: 1px solid red;
   width: 200px;
   height: 200px;
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
#div1{
   border-radius: 50%;
   box-shadow: 0 0 3px rgba(0,0,0,0.5);
   border: none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#div1{
   background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 周易曰：阴中有阳 */
#div1::before{
    width:100px;
    height:100px;
    background:black;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(249,249,251,1) 25%, rgba(0,0,0,1) 25%);

}

/* 阳中有阴 */
#div1::after{
    width:100px;
    height:100px;
    background:white;
    border-radius:50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = "";//string2用于存储HTML形式的string字符串，例如回车转换为<br>，空格转换为"&nbsp"
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] == ' ') {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;//不要忘记html指代的是这个div元素：<div id="html">
        style.innerHTML = string.substring(0, n + 1);//让css样式style的内容为自定义
        window.scrollTo(0, 999999);//控制PC端自动往下滚动
        html.scrollTo(0, 99999);//控制移动端自动往下滚动

        if (n < string.length - 1) {
            n += 1;
            step();
            
        }
        
    }, 30);
}

step();

