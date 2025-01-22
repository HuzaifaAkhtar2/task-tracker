const input = document.querySelector(".input")
const list = document.querySelector(".list")

function add() {
    if (input.value === '') { }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ""
    store()
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        store()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        store()
    }
}, false)

function store() {
    localStorage.setItem("data", list.innerHTML)
}

function showTask() {
    list.innerHTML = localStorage.getItem("data")
}

showTask()