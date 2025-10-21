

const contactForm = document.getElementById("contact-form")












contactForm.addEventListener("submit", function (e){
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.message.value)

    const formData = {name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    }

    fetch("http://localhost:3000/save", { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)});
    })
/*     .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)) */

    

