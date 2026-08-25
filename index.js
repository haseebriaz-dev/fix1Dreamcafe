document.addEventListener("DOMContentLoaded", () => {
  // --- Typewriter Effect ---
  const categories = [
    "🔥 Special Deals",
    "🍲 Karahi & Desi",
    "🥘 Handi & Daal",
    "🍢 Signature & BBQ",
    "🍕 Pizzas",
    "🍔 Burgers & Shawarma",
    "🥩 Steaks & Broast",
    "🍟 Starters & Pasta",
    "🍚 Rice & Chinese",
    "🥗 Salads & Tandoor",
    "🍹 Drinks & Desserts"
  ];

  let catIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const textElement = document.getElementById("typewriter-text");

  if (textElement) {
    function typeEffect() {
      const currentCategory = categories[catIndex];
      
      if (isDeleting) {
        textElement.textContent = currentCategory.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentCategory.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentCategory.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        catIndex = (catIndex + 1) % categories.length;
        typeSpeed = 500;
      }

      setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
  }

  // --- Mobile Hamburger Menu Handler ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

 const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("booking-name").value.trim();
    const phone = document.getElementById("booking-number").value.trim();
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;

    const cafeNumber = "923001212790";

    // Direct Template Literals with clean line breaks (\n)
    const rawMessage = 
`Hello Dream Cafe & Restaurant!
I would like to book a table:
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📅 *Date:* ${date}
⏰ *Time:* ${time}
Please confirm my reservation. Thank you!`;

    // Poore message ko ek hi baar encode karein
    const whatsappURL = `https://wa.me/${cafeNumber}?text=${encodeURIComponent(rawMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}
});