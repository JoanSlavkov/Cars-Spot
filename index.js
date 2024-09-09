//FADEJS ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach ((entry) => {
  console.log(entry)
  if(entry.isIntersecting) {
  entry.target.classList.add('show');
  } else {entry.target.classList.remove('show')
 }
 
 });
 });
 const fadejsElements = document.querySelectorAll('.fadejs');
 fadejsElements.forEach((el)=>observer.observe(el));



document.querySelectorAll('.flex a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSlide = document.getElementById(targetId);
        targetSlide.scrollIntoView({ behavior: 'smooth' });
    });
});
const wrapper = document.querySelector('.cards-wrapper');



const dots = document.querySelectorAll('.dot');

let activeDotNum = 0;

dots.forEach((dot, idx) => {  

  dot.setAttribute('data-num', idx);
  

  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
 
    if(clickedDotNum == activeDotNum) {
      
      return;
    }
    else {
     
      let displayArea = wrapper.parentElement.clientWidth;
      
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';

      dots[activeDotNum].classList.remove('active');

      dots[clickedDotNum].classList.add('active');

      activeDotNum = clickedDotNum;
    }
    
  });
});

const moreTextEl = document.getElementById('more-text');
const toggleBtnEl = document.getElementById('toggle-btn');
const hideBtnEl = document.getElementById('hide-btn');

toggleBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
});

hideBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
});

function Function1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("Btn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rozwiń &#9660; ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Zawiń &#9650";
    moreText.style.display = "inline";
  }
}
function Function2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("Btn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rozwiń &#9660; ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Zawiń &#9650";
    moreText.style.display = "inline";
  }
}


  