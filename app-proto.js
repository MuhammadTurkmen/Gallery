function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
}

class Gallery {
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
  this.chooseImage = this.chooseImage.bind(this)
  // container event
  this.container.addEventListener('click', function(e) {
    if(e.target.classList.contains('img')) {
      this.openModal(e.target, this.list)
    }
  }.bind(this))
}