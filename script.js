/* testimonial */

const testimonials = [
  {
    text: "I am grateful to the company for the timely and exceptionally accurate delivery of food. Everything is very tasty and high quality. And it follows that the weight loss plan I have chosen really works! I was surprised",
    name: "Seona Palmsmith,",
    company: "Dixon Corp"
  },

  {
    text: "The support team was incredibly responsive and professional. Their services helped our business scale faster than we expected.",
    name: "John Carter,",
    company: "Pixel Studio"
  },

  {
    text: "Working with this company has been one of the best experiences. Their attention to detail and dedication is impressive.",
    name: "Amanda Lewis,",
    company: "Bright Agency"
  }
];

const testimonialText = document.querySelector(".testimonial-text");
const clientName = document.querySelector("#clientName");
const clientCompany = document.querySelector("#clientCompany");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateTestimonial(){

  testimonialText.textContent = testimonials[currentIndex].text;

  clientName.textContent = testimonials[currentIndex].name;

  clientCompany.textContent = testimonials[currentIndex].company;
}

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= testimonials.length){
    currentIndex = 0;
  }

  updateTestimonial();

});

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = testimonials.length - 1;
  }

  updateTestimonial();

});


/* footer accordion */

const accordions = document.querySelectorAll(".footer-accordion");

accordions.forEach((accordion) => {

  accordion.addEventListener("click", () => {

    const dropdown = accordion.nextElementSibling;

    if(dropdown.style.display === "block"){

      dropdown.style.display = "none";

    } else {

      dropdown.style.display = "block";

    }

  });

});


/* hero cards */

const heroCards = document.querySelectorAll(".hero-card");

let activeCard = 1;

setInterval(() => {

  heroCards.forEach((card) => {
    card.classList.remove("front");
  });

  heroCards[activeCard].classList.add("front");

  activeCard++;

  if(activeCard >= heroCards.length){
    activeCard = 0;
  }

}, 4000);


/* hero text */

const changingWord = document.querySelector("#changingWord");

const words = [
  "Home the Best",
  "business"
];

let wordIndex = 0;

setInterval(() => {

  changingWord.classList.add("word-fade");

  setTimeout(() => {

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    changingWord.textContent = words[wordIndex];

    changingWord.classList.remove("word-fade");

  }, 450);

}, 4000);