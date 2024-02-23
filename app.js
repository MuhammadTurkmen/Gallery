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
  this.container = element
  this.element = [...element.querySelectorAll('.img')]
  // target
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.modalImages = getElement('.modal-images')
  this.closeBtn = getElement('.close-btn')
  this.nextBtn = getElement('.next-btn')
  this.prevBtn = getElement('.prev-btn')
  // self refrence
  // let self = this 
  // bind functions 
  // this.openModal = this.openModal.bind(this)
  // container event
  this.container.addEventListener('click', function(e) {
    this.openModal()
  }.bind(this))

} 

Gallery.prototype.openModal = function(selectiedImage) {
  this.modal.classList.add('open')
}

const neture = new Gallery(getElement('.nature')) 
const city = new Gallery(getElement('.city')) 