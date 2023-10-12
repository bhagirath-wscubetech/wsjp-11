var item = document.querySelector("#item");
var toDoBox = document.querySelector("#to-do-box");

// appendChild
// prepend
item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            var task = item.value;
            item.value = "";
            var listItem = document.createElement("li");

            listItem.addEventListener(
                "click",
                function (e) {
                    e.target.classList.toggle("done");
                }
            )

            listItem.innerHTML = `
                ${task}
                <span onclick="closeMe(this)">X</span>
            `;

            toDoBox.appendChild(listItem);
        }
    }
)

function closeMe(span) {
    span.parentNode.remove();
    // console.log(span.parentNode)
}