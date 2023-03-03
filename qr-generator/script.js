const wrapper = document.querySelector(".wrapper"),
qrValue = wrapper.querySelector(".form input"),
qrGenerator = wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");

qrGenerator.addEventListener("click", ()=>{
    if(!qrValue.value) return //if no input value
    qrGenerator.innerText = "Generating QR Code..."
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue.value}`
    qrImage.addEventListener("load", ()=>{
        wrapper.classList.add("active")
        qrGenerator.innerText = "Generate QR"
    })
    

})