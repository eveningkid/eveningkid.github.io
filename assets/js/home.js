/**
 * I thought of making it a React app but I thought this
 * would be way too much code for such a small project.
 *
 * I'm glad you came there.
 * I seriously love programming, so if you want in any way
 * to work with me, go ahead and reach me out!
 *
 * I'd be more than glad to know more about your projects
 * and see how we could collaborate on this. :)
 * Talk to you soon!
 */

const programmingBlock = document.querySelector('#programming');
const endingBlock = document.querySelector('#ending');
const languagesBlock = document.querySelector('#languages');
const shortVersionBlock = document.querySelector('#short-version');
const socialBlock = document.querySelector('#social');
const resumeBlock = document.querySelector('#resume');
const SCROLL_MARGIN = 100;

function scrollToDestination(scrollDestination, scrollDuration) {
  const frames = 15;
  const scrollStep = -(window.scrollY - scrollDestination) / (scrollDuration / frames);

  const animateScroll = function () {
      if (window.scrollY <= (scrollDestination - 10) || window.scrollY >= (scrollDestination + 10)) {
          window.scrollBy(scrollDestination, scrollStep);
          requestAnimationFrame(animateScroll);
      }
  };

  animateScroll();
}

function scrollToElement(selector) {
  const element = document.querySelector(selector);
  scrollToDestination(element.offsetTop, 250);
}

function expandImage(selector) {
  const image = selector.cloneNode();
  image.style.position = 'relative';
  image.style.borderRadius = '16px';
  image.style.height = '90%';
  image.style.width = 'auto';
  image.style.transition = 'all .5s';
  image.onclick = null;

  const container = document.createElement('div');
  container.style.top = window.scrollY + 'px';
  container.classList.add('expand-image-container');
  container.appendChild(image);

  document.body.appendChild(container);
  document.body.style.overflow = 'hidden';

  setTimeout(function () {
    container.classList.add('opened');
    document.body.addEventListener('click', function (e) {
      document.body.style.overflow = 'auto';
      document.body.removeChild(container);
      this.removeEventListener('click', arguments.callee, false);
    });
  }, 10);

  return false;
}

function toggleAside() {
  if (programmingBlock.classList.contains('aside-opened')) {
    programmingBlock.classList.remove('aside-opened');
  } else {
    programmingBlock.classList.add('aside-opened');

    setTimeout(function () {
      scrollToElement('#programming');
    }, 300);
  }
}

function toggleResume() {
  if (resumeBlock.classList.contains('opened')) {
    resumeBlock.classList.remove('opened');
  } else {
    resumeBlock.classList.add('opened');
  }
}

window.addEventListener('scroll', function (e) {
  const scrollY = window.scrollY;

  if (scrollY >= (programmingBlock.offsetTop - SCROLL_MARGIN) && scrollY <= languagesBlock.offsetTop) {
    shortVersionBlock.classList.add('opened');
    socialBlock.classList.remove('opened');
  } else if (scrollY >= (languagesBlock.offsetTop + languagesBlock.offsetHeight - 2 * SCROLL_MARGIN)) {
    socialBlock.classList.add('opened');
  } else {
    shortVersionBlock.classList.remove('opened');
  }
});
