var addBtn = document.querySelector("#add");
var main = document.querySelector("#main");
var clockBox = document.querySelector("#clock");

function removeMe(elem) {
    elem.parentNode.parentNode.remove();
}

addBtn.addEventListener(
    "click",
    function () {
        var boxElem = document.createElement("div");
        boxElem.classList.add("box");
        boxElem.innerHTML = `
            <div class="box-header">
                <i class="fa fa-trash" onclick="removeMe(this)"></i>
            </div>
        `;
        main.appendChild(boxElem);
    }
)

function runClock() {
    var d = new Date();
    // clockBox.innerText = d.toLocaleTimeString() + " " + d.toLocaleDateString();
    var phase = "AM";
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (h > 12) {
        phase = "PM";
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    // condn ? true : false
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    clockBox.innerHTML = `${h}:${m}:${s} ${phase}`;
}

setInterval(runClock, 1000);