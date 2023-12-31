// --------------- SEARCHBOX
const searchBtn = document.querySelector('#search-btn')
const searchBox = document.querySelector('.search-box')
const searchInput = searchBox.querySelector('input')
searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    searchBtn.style.opacity = '0'
    searchBox.style.width = '100%'
    searchInput.focus()
})
searchInput.addEventListener('blur', ()=>{
    searchInput.value=''
    searchBox.style.width = '0'
    setTimeout(() => {
        searchBtn.style.opacity = '1'
    },501);
    
})

// --------------- Testimonials ---------------
var testimonials = new Swiper(".testimonials", {
    slidesPerView: 3,
    spaceBetween: 145,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      1500: {
        slidesPerView: 3,
      }
    }
  });

// --------------- Statistics ---------------
let section_counter = document.querySelector('.statistics');
let counters = document.querySelectorAll('.score .number');
let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);
if(section_counter) CounterObserver.observe(section_counter);

// --------------- Articles ---------------
var articles = new Swiper(".article-carrousel", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1100: {
        slidesPerView: 3,
      }
    }
  });

// --------------- Hambourger Menu ---------------
const btn = document.querySelector('.menu-btn');
const navigationLinks = document.querySelector('.navigation-links ul')
navigationLinks.style.width='0%'
btn.addEventListener('click', (e) => {
  e.preventDefault()
  if(navigationLinks.style.width==='0%'){
    navigationLinks.style.width = '100%'
    btn.querySelector('img').setAttribute('src','images/close.svg')
  }
  else{
    navigationLinks.style.width = '0%'
    btn.querySelector('img').setAttribute('src','images/menu.svg')
  }
})
window.addEventListener('scroll', ()=>{
  if(navigationLinks.style.width!=='0%'){
    navigationLinks.style.width = '0%'
    btn.querySelector('img').setAttribute('src','images/menu.svg')
  }
})

// -------------- Orange effect for Work grid
const works_items = Array.from(document.querySelectorAll('.works .single-work'))
works_items.forEach((work_item) => {
  const link = work_item.querySelector('a')
  const img = link.querySelector('img')
  work_item.addEventListener('mouseover',(e) => {
    work_item.style.color = 'var(--clr-primary-200)'
    work_item.style.backgroundColor = 'var(--clr-accent-500)'
    link.style.color = 'var(--clr-primary-200)'
    img.setAttribute('src', '../images/goLinkOrange.svg')
  })
  work_item.addEventListener('mouseout',(e) => {
    work_item.style.color = 'var(--clr-primary-100)'
    work_item.style.backgroundColor = 'var(--clr-neutral-100)'
    link.style.color = 'var(--clr-primary-100)'
    img.setAttribute('src', '../images/goLinkBlack.svg')
  })
})
// const c= document.querySelector('')
// console.log(c)