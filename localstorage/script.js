const text = document.getElementById("textarea");

text.addEventListener("input",local);

function local(){
    localStorage.setItem("save",text.value);

}
if(localStorage.getItem("save")){
    text.value = localStorage.getItem("save");
}