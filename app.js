let succses_btn = document.getElementById("succses");
let error_btn = document.getElementById("error");
let warning_btn = document.getElementById("warning");
let info_btn = document.getElementById("info");
let box = document.querySelector(".box");

function create(type,icon,title) {
    let element = document.createElement("div");
    element.innerHTML = `
    <div class="notification ${type}">
        <div class="icon">
            <i class="${icon}"></i>
        </div>
        <div class="title">
            <h1>${title}</h1>
            <h6>This is a ${type}</h6>
        </div>
        <div class="close" onclick="(this.parentElement.parentElement).remove()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    `
    box.appendChild(element);
    setInterval(() => {
        element.remove()
    },5000)
}

succses_btn.addEventListener("click",()=>{
    let type = "succses",
        icon = "fa-solid fa-circle-check",
        title = "Succses";
        create(type,icon,title);
});

error_btn.addEventListener("click",()=>{
    let type = "error",
        icon = "fa-solid fa-circle-exclamation",
        title = "Error";
        create(type,icon,title);
});

warning_btn.addEventListener("click",()=>{
    let type = "warning",
        icon = "fa-solid fa-triangle-exclamation",
        title = "Warning";
        create(type,icon,title);
});

info_btn.addEventListener("click",()=>{
    let type = "info",
        icon = "fa-solid fa-circle-info",
        title = "Info";
        create(type,icon,title);
});