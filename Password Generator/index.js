let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue")
let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let genBtn = document.getElementById("genBtn")
let copyIcon = document.getElementById("copyIcon")
let passBox = document.getElementById("passBox")

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;

})

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword()
})

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerchars = "abcdefghijklmnopqrstuvwxyz"
let allnumber = "0123456789"
let symbol = "!@#$%^&*()~"


function generatePassword(){
    let genPassword = ""
    let allchars = ""

    allchars  += lowercase.checked ? lowerchars : "";
    allchars  += uppercase.checked ? upperchars : "";
    allchars  += numbers.checked ? allnumber : "";
    allchars  += symbols.checked ? symbol : "";


    if (allchars == "" || allchars.length == 0) {
        return genPassword
    }

    let i = 1;
    while (i<= inputSlider.value) {
        genPassword +=allchars.charAt( Math.floor(Math.random() * allchars.length))
        i++;
    }
    return genPassword
}

copyIcon.addEventListener('click', ()=>{
    if (passBox.value == "" || passBox.value.length >=1) {
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = "check"
        copyIcon.title = "Password Copy"
        setTimeout(()=>{
            copyIcon.innerText = "content_copy"
            copyIcon.title = ""
        }, 3000)
    }

})


