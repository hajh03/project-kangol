const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '상품검색')
});

searchInputEl.addEventListener('blur', function () {
  searchInputEl.setAttribute('placeholder', '')
});





const badgeEl = document.querySelector('header .badge')

window.addEventListener('scroll', _.throttle(function () {
  
  if (window.scrollY > 930) {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    
  }
}, 300))






new Swiper('.main-slider .swiper-container', {
  autoplay: { 
    delay: 5000 
  },
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.main-slider .swiper-pagination', 
    clickable: true 
  },
  navigation: { 
    prevEl: '.main-slider .swiper-prev', 
    nextEl: '.main-slider .swiper-next' 
  }
})

new Swiper('.banner-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.product .swiper-container', {
  autoplay: {
    delay: 5000 
  },
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 0, 
  centeredSlides: true, 
  scrollbar: {
    el: '.product .swiper-scrollbar', 
    draggable: true 
  },
  navigation: { 
    prevEl: '.product .swiper-prev', 
    nextEl: '.product .swiper-next' 
  }
})








// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// function onYouTubePlayerAPIReady() {
//   // <div id="player"></div>
//   new YT.Player('player', {
//     videoId: 'QeGw8yFs6gQ', // 최초 재생할 유튜브 영상 ID
//     playerVars: {
//       autoplay: true, // 자동 재생 유무
//       loop: true, // 반복 재생 유무
//       playlist: 'QeGw8yFs6gQ' // 반복 재생할 유튜브 영상 ID 목록
//     },
//     events: {
//       // 영상이 준비되었을 때,
//       onReady: function (event) {
//         event.target.mute() // 음소거!
//       }
//     }
//   })
// }





$(document).ready(function(){
  for (let i = 0; i < $('.new-tab li').length; i++) {
    $('.new-arrival .new-tab li').eq(i).click(function(){
      $('.new-arrival .new-tab li').removeClass('active');
      $('.new-arrival .product-items').removeClass('show');
      $('.new-arrival .new-tab li').eq(i).addClass('active');
      $('.new-arrival .product-items').eq(i).addClass('show');

    })
  };
  
  for (let i = 0; i < $('.new-tab').length; i++) {
    $('.new-arrival .tab-btn').eq(i).click(function(){
      $('.new-arrival .new-tab li').removeClass('active');
      $('.new-arrival .product-items').removeClass('show');
      $('.new-arrival .new-tab li').eq(i).addClass('active');
      $('.new-arrival .product-items').eq(i).addClass('show');

      //방향에 맞게 움직이려면? tab-btn-pre -1  tab-btn-next +1

    })
  };  


  for (let i = 0; i < $('.best-tab li').length; i++) {
    $('.best-seller .best-tab li').eq(i).click(function(){
      $('.best-seller .best-tab li').removeClass('active');
      $('.best-seller .product-items').removeClass('show');
      $('.best-seller .best-tab li').eq(i).addClass('active');
      $('.best-seller .product-items').eq(i).addClass('show');

    })
  };
  
  for (let i = 0; i < $('.best-tab li').length; i++) {
    $('.best-seller .tab-btn').eq(i).click(function(){
      $('.best-seller .best-tab li').removeClass('active');
      $('.best-seller .product-items').removeClass('show');
      $('.best-seller .best-tab li').eq(i).addClass('active');
      $('.best-seller .product-items').eq(i).addClass('show');

    })
  };  



  new WOW.init();
  
})



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();