//
//
//

var menuOnOff = false;

function clickBtn(button = null) {
    if (button == null) {

        menuOnOff = !menuOnOff;
        var navToggle = document.getElementById("nav-toggle");
        if (menuOnOff) {
            // オンになったら
            navToggle.innerHTML = "◯";
            navToggle.display = 'inline';
        }
        else {
            // オフになったら
            navToggle.innerHTML = "●";
            navToggle.display = 'none';
        }
        var navList = document.getElementById("nav-list");
        var navi = navList.getElementsByClassName("navi");
        for (var key in navi) {
            console.log(navi[key]);
            navi[key].display = navToggle.display;
        }
    }
    else {
        const elements = document.getElementsByClassName("navi");
        Array.prototype.forEach.call(elements, function (e1) {
            const e2 = e1.
            console.log(e1);
        });
        console.log(button);
    }
}
