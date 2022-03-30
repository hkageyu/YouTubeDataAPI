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
        var header = document.getElementById("header");
        header.style.paddingTop = "0px";
        header.style.paddingRight = "0px";
        header.style.paddingBottom = "0px";
        header.style.paddingLeft = "0px";
        header.style.boxSizing = "border-box";
        header.style.width = "250px";
        header.style.height = "600px";
        header.style.background = "#6aa0e7";
        header.style.border = "3px solid #35557f";
        header.style.borderRadius = "36px 0px";
    }
    else {
        menuOnOff = MENU_OFF;
        // オフになったら
        navToggle.innerHTML = "●";
        var header = document.getElementById("header");
        header.style.paddingTop = "0px";
        header.style.paddingRight = "200px";
        header.style.paddingBottom = "5px";
        header.style.paddingLeft = "0px";
        header.style.boxSizing = "border-box";
        header.style.width = "250px";
        header.style.height = "600px";
        header.style.background = "#ffffff";
        header.style.border = "3px solid #ffffff";
        header.style.borderRadius = "0px 0px";

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
    var list = Array(); // 多分 List に含まれてるのを検索する関数があると思う
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
        var list = Array(); // 多分 List に含まれてるのを検索する関数があると思う
        for (var i = 0; i < contents.length; i++) {
            list[i] = contents[i];
        }
        while (contents) {
            if (list.includes("cont-slideshow")) {
                slideClick();
            }
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

/**
 * スライドショウ
 * 
 * suspend: これを設定すると停止
 */
function slideClick(suspend = false) {
    slideShow = !slideShow;
    let timerId = null;
    if (suspend == true) {
        clearInterval(timerId);
        timerId = null;
        document.getElementById("slide-show").classList.toggle("is-open");
    }
    else if (!timerId && slideShow == true) {
        var c = document.getElementById("btnSlide");
        c.classList.toggle("is-active");
        document.getElementById("slide-show").style.display = "block";
        const img_src = ["img/imgae1.jpg", "img/image2.jpg", "img/image3.jpg"];
        let num = 0;

        function slide_time() {
            if (num == img_src.length) {
                num = 1;
            }
            else {
                num++;
            }
            console.log("img=" + num);
            if (img_src[num] != null) {
                let img = document.getElementById("slide_img");
                img.src = img_src[num];
                img.classList.toggle("is-open");
            }
        }
        timerId = setInterval(slide_time, 1000);
    }
    else {
        clearInterval(timerId);
        timerId = null;
    }
}

let slideShow = false;
let btnSlide = document.getElementById('btnSlide');
btnSlide.addEventListener('click',  slideClick);


// youtube
// function youtubeClick() {
//     document.getElementById("youtube").style.display = "block";
//     var c = document.getElementById("youtube");
//     c = c.nextElementSibling;
//     (c.classList)[0].style.display = "block";

//     // 2. This code loads the IFrame Player API code asynchronously.
//     var tag = document.createElement('script');

//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // API読み込み後にプレーヤーの設定
//     var player;
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player');
//     }
    
//     // ボタンクリック時の操作
// //    document.getElementById('play').addEventListener('click', function() {
//     //     player.playVideo();
//     // }, false);
// }


// let youtube = false;
// let btnYoutube = document.getElementById('btnYoutube');
// btnYoutube.addEventListener('click',  youtubeClick);
