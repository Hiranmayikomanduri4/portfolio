
// ================= MOBILE MENU =================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for your message! " +
            "Please connect with me through LinkedIn or GitHub."
        );

        contactForm.reset();

    });

}

