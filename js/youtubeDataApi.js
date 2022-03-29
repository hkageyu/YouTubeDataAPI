//
//
//

// メニューオン・オフ時の CSS の display
const MENU_ON = "1";
const MENU_OFF = "0";
// js 内ので保持
var menuOnOff = MENU_OFF;

function clickBtn(button = null) {
    console.log("test");
    var navToggle = document.getElementById("nav-toggle");
    if (menuOnOff == MENU_OFF) {
        menuOnOff = MENU_ON;
        // オンになったら
        navToggle.innerHTML = "◯";
        //navToggle.display = MENU_ON;
    }
    else {
        menuOnOff = MENU_OFF;
        // オフになったら
        navToggle.innerHTML = "●";
        //navToggle.display = MENU_OFF;
    }
/*
    var navList = document.getElementById("nav-list");
    var navi = navList.getElementsByClassName("nav");
    for (var key in navi) {
        if (navi[key] && navi[key].style) { // ←解決する演算子.?的なのがあったはず
            navi[key].style.opacity = menuOnOff;
            console.log("opacity=" + navi[key].style.opacity);
        }
    }
 */
    var opacity = document.getElementsByClassName("opacity");
    // var active = document.getElementsByClassName("active");
    console.log("opa=" + opacity[0].style.opacity);
    opacity[0].style.opacity = menuOnOff;
    console.log("opa=" + opacity[0].style.opacity);

    // else {
    //     const elements = document.getElementsByClassName("navi");
    //     Array.prototype.forEach.call(elements, function (e1) {
    //         const e2 = e1.
    //         console.log(e1);
    //     });
    //     console.log(button);
    // }
}

/**
 * @opacity 
 *  op の key 番目の要素の style と style.opacity が定義されているならスタイル menuOnOff を設定する。
 */
let opacity = (op, key) => {
    if (op[key].style && op[key].style.opacity !== null) {
        op[key].style.opacity = menuOnOff;
        op[key].style.listStyle = "";
        op[key].style.padding = "";
        console.log("op[key].style.opacity=" + op[key].style.opacity);
    }
};

/**
 * @activate
 * domcument で ClassNmae="opacity" が設定されているものに menuOnOff を設定する。
 */
function activate() {
    var o1 = document.getElementsByClassName("opacity");
    for (var k1 in o1) {
        opacity(o1, k1);
    }
}

// menu 表示
const menu = document.getElementsByClassName("menu");

/**
 * @toggle
 */
function toggle() {
    var list = Array();
    for (var i = 0; i < this.classList.length; i++) {
        list[i] = this.classList[i];
    }
    if (list.includes("menu")) {
        this.classList.toggle("is-active");
        var contents = this.nextElementSibling;
        while (contents) {
            var flag = false;
            for (var i = 0; i < contents.classList.length; i++) {
                if (contents.classList[i] == 'contents') {
                    flag = true;
                }
            }
            if (flag) {
                console.log("contents=" + contents.toString());
                contents.classList.toggle("is-open");
            }
            console.log("contents=" + contents.className);
            contents = contents.nextElementSibling;
        }
     }
     else if (list.includes("contents")) {
        var contents = this.classList;
        while (contents) {
            console.log("contents=" + contents);
            contents = contents.nextElementSibling;
        }
    }
}

/**
 * @
 * 
 * className="menu" に click -> toggle イベントリスナーを付ける
 */
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}

/**
 * className="contents" に click イベントリスナーを付ける
 */
const contents = document.getElementsByClassName("contents");
 for (let i = 0; i < contents.length; i++) {
    contents[i].addEventListener("click", toggle);
}

/**
 * inqBtn が押された
 */
function buttonClick(){
    if (reviewTextarea.value.length == 0) {
        inqMsg.innerText = "文字を入力してください";
    }
    else if (reviewTextarea.value.length > 10) {
        inqMsg.innerText = "10文字以内で入力してください";
    }
    else {
        inqMsg.innerText = reviewTextarea.value.length + "文字\n" + reviewTextarea.value;
    }
}

let reviewTextarea = document.getElementById('inqTextarea');
reviewTextarea.value = '感想をお願いします';
let inqMsg = document.getElementById('inqMsg');

let checkButton = document.getElementById('inqBtn');
inqBtn.addEventListener('click',  buttonClick);


  