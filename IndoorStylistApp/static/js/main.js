document.getElementById('btn3').onclick = function() {
    var obj = document.getElementById("pics");
    console.log("Change Clothes");
    let src = "/static/images/yu.png";
    obj.classList.add("mae-body");
    obj.classList.remove("f-clothes");
    obj.classList.remove("t-clothes");
    obj.classList.remove("makima-clothes");
    document.getElementById("pics").src=src;
}

document.getElementById('btn4').onclick = function() {
    var obj = document.getElementById("pics");
    let src = "/static/images/m_clothes.png";
    obj.classList.add("mae-body");
    obj.classList.remove("f-clothes");
    obj.classList.remove("t-clothes");
    obj.classList.remove("makima-clothes");
    document.getElementById("pics").src=src;
}

document.getElementById('btn5').onclick = function() {
    var obj = document.getElementById("pics");
    let src = "/static/images/f_clothes.png";
    obj.classList.add("f-clothes");
    obj.classList.remove("mae-body");
    obj.classList.remove("t-clothes");
    obj.classList.remove("makima-clothes");
    document.getElementById("pics").src=src;
}

document.getElementById('btn6').onclick = function() {
    var obj = document.getElementById("pics");
    let src = "/static/images/t_clothes.png";
    obj.classList.add("t-clothes");
    obj.classList.remove("mae-body");
    obj.classList.remove("f-clothes");
    obj.classList.remove("makima-clothes");
    document.getElementById("pics").src=src;
}

document.getElementById('btn7').onclick = function() {
    var obj = document.getElementById("pics");
    let src = "/static/images/makima_clothes.png";
    obj.classList.add("makima-clothes");
    obj.classList.remove("mae-body");
    obj.classList.remove("f-clothes");
    obj.classList.remove("t-clothes");
    document.getElementById("pics").src=src;
}