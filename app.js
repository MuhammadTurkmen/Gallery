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
  this.list = [...element.querySelectorAll('.img')]
  // target
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.imageName = getElement('.image-name')
  this.modalImages = getElement('.modal-images')
  this.closeBtn = getElement('.close-btn')
  this.nextBtn = getElement('.next-btn')
  this.prevBtn = getElement('.prev-btn')
  // self refrence
  // let self = this 
  // bind functions 
  // this.openModal = this.openModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.nexImage = this.nexImage.bind(this)
  this.prevImage = this.prevImage.bind(this)
  // container event
  this.container.addEventListener('click', function(e) {
    if(e.target.classList.contains('img')) {
      this.openModal(e.target, this.list)
    }
  }.bind(this))

} 

Gallery.prototype.openModal = function(selectiedImage, list) {
  this.setMainImage(selectiedImage)
  this.modalImages.innerHTML = list.map(function(image) {
    return `<img 
    src="${image.src}" 
    title="${image.title}" 
    data-id="${image.dataset.id}"
    class="${selectiedImage.dataset.id === image.dataset.id?"modal-img selected":"modal-img"}"
    />`
  }).join('')
  this.modal.classList.add('open')
  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nexImage)
  this.prevBtn.addEventListener('click', this.prevImage)
}

Gallery.prototype.setMainImage = function(selectiedImage) {
  this.modalImg.src = selectiedImage.src 
  this.imageName.textContent = selectiedImage.title 
}

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open')
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nexImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
}

Gallery.prototype.nexImage = function() {
  const selected = this.modalImages.querySelector('.selected')
  const next = selected.nextElementSibling || this.modalImages.firstElementChild
  selected.classList.remove('selected')
  next.classList.add('selected')
  this.setMainImage(next)
}

Gallery.prototype.prevImage = function() {
  
}

const neture = new Gallery(getElement('.nature')) 
const city = new Gallery(getElement('.city')) 