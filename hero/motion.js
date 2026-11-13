const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-entering');
    observer.unobserve(entry.target);
  }
}, { threshold: .15 });

document.querySelectorAll('.fcard, .footer-title').forEach(item => observer.observe(item));

const hero = document.querySelector('.experiment-hero');
const heroMotion = matchMedia('(prefers-reduced-motion: no-preference)');
let heroFrame = 0;

function moveHero() {
  heroFrame = 0;
  const bounds = hero.getBoundingClientRect();
  if (bounds.bottom <= 0) return;
  const progress = Math.max(0, Math.min(1, -bounds.top / bounds.height));
  const burst = 1 - (1 - Math.min(1, progress / .55)) ** 2;
  const spread = 1 - (1 - Math.min(1, progress / .38)) ** 2;
  hero.style.setProperty('--burst', spread);
  hero.style.setProperty('--hero-travel', burst * Math.min(150, innerWidth * .2) + 'px');
}

function queueHeroMotion() {
  if (!heroFrame) heroFrame = requestAnimationFrame(moveHero);
}

function syncHeroMotion() {
  if (heroMotion.matches) {
    addEventListener('scroll', queueHeroMotion, { passive: true });
    addEventListener('resize', queueHeroMotion);
    moveHero();
  } else {
    removeEventListener('scroll', queueHeroMotion);
    removeEventListener('resize', queueHeroMotion);
    cancelAnimationFrame(heroFrame);
    heroFrame = 0;
    hero.style.removeProperty('--hero-travel');
    hero.style.removeProperty('--burst');
  }
}

heroMotion.addEventListener('change', syncHeroMotion);
syncHeroMotion();

const portraitButton = document.querySelector('.portrait-wink');
const eyes = [...document.querySelectorAll('.expression-eye')];
const winkFrames = [
  [{opacity: 0, offset: 0}, {opacity: 1, offset: .13}, {opacity: 1, offset: .35},
    {opacity: 0, offset: .44}, {opacity: 0, offset: .54}, {opacity: 1, offset: .62},
    {opacity: 1, offset: .86}, {opacity: 0, offset: 1}],
  [{opacity: 0, offset: 0}, {opacity: 1, offset: .13}, {opacity: 1, offset: .86},
    {opacity: 0, offset: 1}]
];
let expression = [];
const eyesReady = Promise.all(eyes.map(eye => eye.decode())).then(() => true, () => false);

async function wink(automatic = false) {
  if (!await eyesReady || (automatic && !heroMotion.matches)) return;
  expression.forEach(animation => animation.cancel());
  expression = eyes.map((eye, index) =>
    eye.animate(winkFrames[index], {duration: 1750})
  );
}

portraitButton.addEventListener('click', () => wink());
const portraitObserver = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return;
  portraitObserver.disconnect();
  setTimeout(() => {
    if (portraitButton.getBoundingClientRect().bottom > 0 && expression.length === 0) wink(true);
  }, 950);
}, {threshold: .6});
portraitObserver.observe(portraitButton);

const scrollCue = document.querySelector('.scroll-cue');
function dismissScrollCue() {
  if (scrollY <= 0) return;
  scrollCue.classList.add('is-dismissed');
  removeEventListener('scroll', dismissScrollCue);
}
addEventListener('scroll', dismissScrollCue, { passive: true });
dismissScrollCue();
