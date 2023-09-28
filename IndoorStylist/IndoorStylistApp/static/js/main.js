// const pushBtn = (btn,src) => {
//     document.getElementById(btn).onclick = function(){
//       console.log("Change Clothes");
//       document.getElementById("pics").src=src;
//     }
//   }
//   pushBtn("btn3","images/humnan_body.png")
//   pushBtn("btn4","images/m_clothes.png")
  //pushBtn("btn5","img/tori.png")
  //pushBtn("btn6","img/uma.png")
  //pushBtn("btn7","img/usi.png")
  //pushBtn("btn8","img/yagi.png")

document.getElementById('btn3').onclick = function() {
    console.log("Change Clothes");
    let src = "/static/images/yu.png"
    document.getElementById("pics").src=src;
}

document.getElementById('btn4').onclick = function() {
    console.log("Change Clothes");
    let src = "/static/images/m_clothes.png"
    document.getElementById("pics").src=src;
}