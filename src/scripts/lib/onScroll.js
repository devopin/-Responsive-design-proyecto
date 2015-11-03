var onScroll = function (elem) {
  if(window.scrollY >= 200) {
    // headerElem.classList.toggle('.header--light');
    elem.classList.add('header--light');
  } else {
    // headerElem.classList.toggle('.header--light');
    elem.classList.remove('header--light');
  }
}

module.exports = onScroll;