function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
  
  
function Gallery(element) {
  this.element = [...element.querySelectorAll('.img')]
  // target
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
} 

const neture = new Gallery(getElement('.nature')) 
const city = new Gallery(getElement('.city')) 