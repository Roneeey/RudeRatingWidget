'use strict';

const btnRating = document.querySelectorAll('.btn-rating');
const submitBtn = document.querySelector('.btn');
const homeCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.card--thank-you');

let ratingNum = 0;

btnRating.forEach(function (btn, i) {
  btn.onclick = function () {
    ratingNum = i + 1;
  };
});

const resetRating = function () {
  thankYouCard.style.zIndex = '-1';
  thankYouCard.classList.add('hidden');
};

const thankYouMessage = function () {
  const setAnimation = function () {
    thankYouCard.firstChild.classList.add('animation');
  };
  if (ratingNum == 1) {
    thankYouCard.style.zIndex = '1';
    thankYouCard.classList.remove('hidden');

    thankYouCard.innerHTML = `<div>🖕</div>
    <h1>Sorry the truth hurts!</h1>
    <p>
      You probably support George Russel 🤮
    </p>
    <button class="btn btn-reset">CHANGE YOUR RATING</button>`;
    const btnReset = document.querySelector('.btn-reset');

    btnReset.addEventListener('click', resetRating);
  }
  if (ratingNum == 2) {
    thankYouCard.style.zIndex = '1';
    thankYouCard.classList.remove('hidden');

    thankYouCard.innerHTML = `<div>😒</div>
    <h1>2 out of 5?!</h1>
    <p>
      Your face is 2 out of 5 🤮
    </p>
    <button class="btn btn-reset">CHANGE YOUR RATING</button>`;
    const btnReset = document.querySelector('.btn-reset');

    btnReset.addEventListener('click', resetRating);
  }
  if (ratingNum == 3) {
    thankYouCard.style.zIndex = '1';
    thankYouCard.classList.remove('hidden');

    thankYouCard.innerHTML = `<div>🔥</div>
    <h1>A 3 rating!</h1>
    <p>
      Please rate OUR support and NOT your life 
    </p>
    <button class="btn btn-reset">CHANGE YOUR RATING</button>`;
    const btnReset = document.querySelector('.btn-reset');

    btnReset.addEventListener('click', resetRating);
  }
  if (ratingNum == 4) {
    thankYouCard.style.zIndex = '1';
    thankYouCard.classList.remove('hidden');

    thankYouCard.innerHTML = `<div>😎</div>
    <h1>Respect!</h1>
    <p>
      I bet nothing is ever good enough for you.. scum! 
    </p>
    <button class="btn btn-reset">CHANGE YOUR RATING</button>`;
    const btnReset = document.querySelector('.btn-reset');

    btnReset.addEventListener('click', resetRating);
  }
  if (ratingNum == 5) {
    thankYouCard.style.zIndex = '1';
    thankYouCard.classList.remove('hidden');

    thankYouCard.innerHTML = `<div>👌</div>
    <h1>Oh Yeah!</h1>
    <p>
      No take backs 
    </p>
    <button class="btn btn-reset">CHANGE YOUR RATING</button>`;
    const btnReset = document.querySelector('.btn-reset');

    btnReset.addEventListener('click', resetRating);
  }
  setInterval(setAnimation, 0);
};

submitBtn.addEventListener('click', thankYouMessage);
