
let searchForm =document.querySelector(".search-form")
let login = document.querySelector(".login-form-container")

let openlogin =document.querySelector(".login").onclick=()=>{
    login.classList.add("active")
}
document.getElementById("login-close").onclick = () =>{
    login.classList.remove("active")
}


document.querySelector("#btn-icon").onclick = () =>{
    searchForm.classList.toggle("active")
}







window.onscroll =function (){
    searchForm.classList.remove("active")
    if( scrollY > 80 ){
        document.querySelector('.header .header-2').classList.add("active");
    }
    else
    {        
        document.querySelector('.header .header-2').classList.remove("active");
    }
}
window.onload =function (){
    if( scrollY > 80 ){
        document.querySelector('.header .header-2').classList.add("active");
    }
    else
    {        
        document.querySelector('.header .header-2').classList.remove("active");
    }
    // fadeOut()
}



// function loader(){
//   document.querySelector(".loader-container").classList.add("active")

// }


// function fadeOut(){
//   setTimeout(loader,4000)
// }

var swiper = new Swiper(".box-slider", {
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450:{
        slidesPerView:2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
var swiper = new Swiper(".arrivale-slider", {
    spaceBetween: 10,
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".arrivale-slider", {
    spaceBetween: 10,
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    loop:true,
    centeresSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
