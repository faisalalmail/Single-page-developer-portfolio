const contactForm = document.getElementById("contact-form")
const projects = document.getElementById("projects-grid")




contactForm.addEventListener("submit", function (e){
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.message.value)

if ((e.target.email.value).includes('@') & (e.target.email.value).includes('.')){
    console.log("valid email")
    let height = contactForm.offsetHeight;
        const formData = {name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    }
    // remove the form and display message
    contactForm.innerHTML = `
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




// Loading projects data

fetch('/projects.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
// what to do with the data?
console.log(data)
populateProjects(data)
});

function populateProjects(data){
    for (let project of data){
        console.log(project.name)
        console.log(project.img)
    let projectDiv = `
    <div class="project">
  <div class="project-img-div">
      <div class="view-buttons-large">
  <a href="${project.links[1]}"><button>View project</button></a>
  <a href="${project.links[0]}"><button>View code</button></a>
  </div>
  <picture>
  <source srcset="${project.img}" media="(width >= 1024px)" />
  <img src="${project.img}" class="project-img" alt="project image">
</picture>
</div>
  <div class="project-title">${project.name}</div>
  <div class="langs">${project.techstack}</div>
  <div class="view-buttons">
  <a href="${project.links[1]}"><button>View project</button></a>
  <a href="${project.links[0]}"><button>View code</button></a>
  </div>
</div>
    `
projects.innerHTML +=projectDiv
    }
}