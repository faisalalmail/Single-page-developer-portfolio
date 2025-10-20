const contactForm = document.getElementById("contact-form")












contactForm.addEventListener("submit", function (e){
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.message.value)

    

})