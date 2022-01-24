function openCloseMenu() {
  let x = document.querySelector('.mobile-menu');
  let y = document.querySelector('body');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
  else {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
	}
}
