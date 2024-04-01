
let btnstate = document.querySelector(".exitbtn");
let contents = document.querySelector(".container")
let wlcmpage = document.querySelector(".openwelcomepage")
wlcmpage.style.display = "none"

console.log(btnstate)
btnstate.addEventListener("click", () => {
    contents.style.display = "none";
    wlcmpage.style.display ="block";
})
wlcmpage.addEventListener("click", () => {
    contents.style.display = "block";
    wlcmpage.style.display ="none";
})


 