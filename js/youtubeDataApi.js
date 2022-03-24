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
        console.log("opa=" + opacity[0].style.opacity);
        opacity[0].style.opacity = menuOnOff;
        console.log("opa=" + opacity[0].style.opacity);
//   }
    // else {
    //     const elements = document.getElementsByClassName("navi");
    //     Array.prototype.forEach.call(elements, function (e1) {
    //         const e2 = e1.
    //         console.log(e1);
    //     });
    //     console.log(button);
    // }
}
