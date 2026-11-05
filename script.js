const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia('(max-width: 980px)').matches) {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 980px)').matches) {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function displaySource(source) {
  return reducedMotion.matches ? source.replace(/\.gif$/, '-still.png') : source;
}

function setPressedButton(buttons, selectedButton) {
  buttons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle('is-active', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
}

const itemShowcase = document.querySelector('[data-item-showcase]');

if (itemShowcase) {
  const image = itemShowcase.querySelector('[data-item-image]');
  const label = itemShowcase.querySelector('[data-item-label]');
  const description = itemShowcase.querySelector('[data-item-description]');
  const buttons = [...itemShowcase.querySelectorAll('button[data-src]')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      image.src = displaySource(button.dataset.src);
      image.alt = button.dataset.alt;
      label.textContent = button.dataset.label;
      description.textContent = button.dataset.description;
      setPressedButton(buttons, button);
    });
  });
}

const slayerShowcase = document.querySelector('[data-slayer-showcase]');

if (slayerShowcase) {
  const image = slayerShowcase.querySelector('[data-slayer-image]');
  const name = slayerShowcase.querySelector('[data-slayer-name]');
  const buttons = [...slayerShowcase.querySelectorAll('.slayer-roster button[data-src]')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      image.src = displaySource(button.dataset.src);
      image.alt = button.dataset.alt;
      name.textContent = button.dataset.name;
      setPressedButton(buttons, button);
    });
  });
}

function refreshMotionPreference() {
  document.querySelectorAll('img[src$=".gif"], img[src$="-still.png"]').forEach((image) => {
    const animatedSource = image.src.replace(/-still\.png$/, '.gif');
    image.src = displaySource(animatedSource);
  });
}

refreshMotionPreference();
reducedMotion.addEventListener('change', refreshMotionPreference);

const showcaseVideos = [...document.querySelectorAll('[data-showcase-video]')];

function refreshVideoMotionPreference() {
  showcaseVideos.forEach((video) => {
    if (reducedMotion.matches) {
      video.pause();
      video.currentTime = 0;
    } else {
      video.play().catch(() => {
        // Browser autoplay policies may require the visitor to press play.
      });
    }
  });
}

refreshVideoMotionPreference();
reducedMotion.addEventListener('change', refreshVideoMotionPreference);

const topicLinks = [...document.querySelectorAll('.topic-index a[href^="#"]')];
const topicPanels = topicLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (topicLinks.length && topicPanels.length && 'IntersectionObserver' in window) {
  const topicObserver = new IntersectionObserver((entries) => {
    const visiblePanel = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (!visiblePanel) return;

    topicLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${visiblePanel.target.id}`;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-18% 0px -55% 0px',
    threshold: [0, 0.15, 0.35]
  });

  topicPanels.forEach((panel) => topicObserver.observe(panel));
}
