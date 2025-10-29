

const contactForm = document.getElementById("contact-form")






contactForm.addEventListener("submit", function (e){
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.message.value)

if ((e.target.email.value).includes('@') & (e.target.email.value).includes('.')){
    console.log("valid email")
    let height = document.getElementById("contact-form").offsetHeight;
        const formData = {name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    }
    // remove the form and display message
    document.getElementById("contact-form").innerHTML = `
    <div class="recieved" style="height:${height}px">Your message has been recieved.<br> We will contact you soon!</div>`
      // send the data to the server
    fetch("http://localhost:3000/save", 
        {method: 'POST', 
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
} else {
    // error handling here
    console.log("error")
    document.getElementById("email").classList.add("error")
    document.getElementById("email-error").style.display = "block"
}


})
        
/*         , { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)}); */
  /*   }) */
/*     .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)) */
