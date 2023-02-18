const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader,3000);
}

window.onload = fadeOut();

// gallery

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item');


class Carousel {

  constructor(container,items,controls){
  this.carouselContainer = container;
  this.carouselControls = controls;
  this.CarouselArray = [...items];
 }

 updateGallery(){
  this.CarouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
  });

  this.CarouselArray.slice(0,5).forEach((el , i) => {
      el.classList.add(`gallery-item-${i+1}`);
  });
 }
 setCurrentState(direction){
  if(direction.className == 'gallery-controls-previous'){
      this.CarouselArray.unshift(this.CarouselArray.pop());
  }else{
      this.CarouselArray.push(this.CarouselArray.shift());
  }
  this.updateGallery();
 }
 setControls(){
  this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control;
  });
 }

 useControls(){
  const triggers = [...galleryControlsContainer.childNodes];
  triggers.forEach(control => {
      control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
      });
  });
 }
}

const exampleCarousel = new Carousel(galleryContainer,galleryItems,galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }


// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
