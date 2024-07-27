let navbar=document.querySelector(".navbar");
let anchor=document.querySelectorAll(".navbar .hi");
let menubtn=document.querySelector("#menu");
menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('hello');
    if(menubtn.classList.contains("fa-bars")){
        menubtn.classList.replace("fa-bars","fa-xmark");
    }
    else{
        menubtn.classList.replace("fa-xmark","fa-bars");
    }
})
anchor.forEach((anchors) => {
    anchors.addEventListener('click', (e) => {
    anchor.forEach((anchors)=>anchors.classList.remove("active"));
      e.target.classList.add('active');
    });
  });
  function sendEmail(){
    let parametrs={
        name:document.getElementById("name").value,
        fromemail:document.getElementById("email").value,
        message:document.getElementById("message").value,
        subject:document.getElementById("subject").value
    };
    emailjs.send("service_8y5uajn","template_allhnaq",parametrs).then(alert('email sent successfully'));
  }
  /*------scroll js----*/
  ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
  });
  ScrollReveal().reveal('.home-text, heading', {origin:'top' });
  ScrollReveal().reveal('.image,.skill-container,.project-box,.contact-container', {origin:'bottom'});
  ScrollReveal().reveal('.home-text h1 , .about-img', {origin:'left'});
  ScrollReveal().reveal('.home-text p, .about-content', {origin:'right'});