import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
//AOS
AOS.init({
  
});
//Splide Js.
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#card-carousel', {
    perPage: 1,
    type: 'loop',
    focus:'center',
    width:'100%',
    gap:'20%',
  }).mount();
});

// This is the navbar
const NavBarComponent = {
  template: `
    <header class="nav-bar">
      <h1 class="header-title"><span class="header-colored">Doc</span>Syne</h1>
      <div class="navigation-tabs">
        <a href="#" class="header-colored">Home</a>
        <a href="#">Find Doctor</a>
        <a href="#">Our Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
      <button-dark></button-dark>
    </header>
  `
};

// Dark Button Component
const ButtonDark = {
  template: `
    <button class="button-dark">
      {{ buttonTextInitial }}
    </button>
  `,
  setup() {
    const buttonTextInitial = ref('Get Started'); // Use ref for reactivity
    return {
      buttonTextInitial
    };
  }
};
//Blue button.
const ButtonPrimary = {
  template:`<button class="button-primary">{{ blueButtonTextInitial }}</button>`,
  setup() {
  const blueButtonTextInitial = ref('Book an appointment'); // Use ref for reactivity
  return {
    blueButtonTextInitial
  };
}
}
//Hero Container.
const MainContainer = {
  template:`<div class="hero">
  <div class="hero-section">
    <h2 class="hero-charge">Quality & expert care for your health</h2>
      <div class="hero-section-buttons">
      <button-blue></button-blue>
      <p class="services-text">Our services <i class="fa-solid fa-arrow-right right-icon"></i></p>
  </div>
  </div>
  <div class="image-div">
    <img src="https://i.imghippo.com/files/zdq1779viY.png" class="doctor-image-pose">
  </div>
  </div>
  <div class="card-section-end">
    <div class="info-nav">
      <h2 class="info">24/7</h2>
      <p class="info-description">Online Support</p>
    </div>
    <div class="info-nav">
      <h2 class="info">100+</h2>
      <p class="info-description">Doctors</p>
    </div>
    <div class="info-nav">
      <h2 class="info">1M+</h2>
      <p class="info-description">Active Patients</p>
    </div>
  </div>`
}
//Information Container.
const InfoContainer = {
  template:`<div class="info-container">
  <div class="info-text-forms">
    <h2 class="info-text">Sphere of <span class="info-text-less-bold">safe haven</span></h2>
  <p class="info-text-full">
  Welcome to our medical website. Find expert advice, book appointments, and explore trusted health resources. Your health is our priority.
  </p>
  </div>
  </div>`
}
//Card information.
const Card = {
  template: `
    <div class="card" :style="{ backgroundColor: bgColor }">
      <p class="icon" v-html="icon" v-bind:style="{
        backgroundColor:bgCircleColor
      }"></p>
      <h3 class="card-title">{{ title }}</h3>
    </div>
  `,
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    
  bgCircleColor:{
    type:String,
    required:true,
    }
  }
};
//Carousel Card.
const CarouselInfoCard = {
  template: `
    <div class="carousel-card">
      <h3 class="carousel-description" >{{description}}</h3>
      <div class="carousel-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7Faq7jWmFkSsaZ16LRG_SweEDArNeRi3whJ8req8SA&s" alt="doctor-image" class="doctor-image">
        <div class="person-info">
          <h4 class="person-name">{{name}}</h4>
          <div class="star-container">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }
};
// Initializing Vue app.
const app = createApp({});
// Register 'nav-bar' globally.
app.component('nav-bar', NavBarComponent);
// Register 'button-dark' globally.
app.component('button-dark', ButtonDark);
//Register 'mainContainer' globally.
app.component('main-container',MainContainer);
//Register 'card' globally.
app.component('card',Card);
//Register carousel card globally.
app.component('carousel-card',CarouselInfoCard);
//Register info section globally.
app.component('info-container',InfoContainer);
//Register into section globally.
app.component('button-blue',ButtonPrimary);
// Mount app on main entire website container.
app.mount('#entireContainer');