const currentPage = window.location.pathname.split('/').pop();
const selectMenu = document.querySelector('.menu-mobile');
if (selectMenu) {
  for (let option of selectMenu.options) {
    if (option.value === currentPage) {
      option.selected = true;
      break;
    }
  }
}