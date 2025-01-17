const wrapper  = document.body.querySelector(".wrapper");
const generateBtn = document.querySelector(".btn");
const qr_input = document.querySelector("input");
const qr_img = document.querySelector(".Qr-code img");

generateBtn.addEventListener('click',() => {
    let qr_value = qr_input.value;
    if(!qr_value) return;
    generateBtn.innerHTML = "Generating QR-code ...";
    console.log(qr_value);
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_value}`

    qr_img.addEventListener('load',()=>{
        wrapper.classList.add("active"); 
    generateBtn.innerHTML = "Your QR-code is here"; 
    });
});

qr_input.addEventListener("keyup",()=>{
    if(!qr_input.value){
        wrapper.classList.remove("active");  
    }
});