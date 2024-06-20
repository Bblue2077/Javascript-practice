const photoSlideShow = {
    photoList: ['photo0.jpg', 'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'], 
    currentPhotoIndex: 0, 
  
    nextPhoto: function() {
      if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        return (`Current photo name: ${this.photoList[this.currentPhotoIndex]}`);
      }  else {
         return ("End of slideshow");
       }
    },
  
    prevPhoto: function() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        return (`Current photo name: ${this.photoList[this.currentPhotoIndex]}`);
    }  else {
         return ("Beginning of slideshow");
       }
    },
  
    getCurrentPhoto: function() {
      return this.photoList[this.currentPhotoIndex];
    }
  };
  console.log (photoSlideShow.currentPhotoIndex);
  console.log (photoSlideShow.getCurrentPhoto());
  console.log (photoSlideShow.nextPhoto());
  console.log (photoSlideShow.prevPhoto());
  
  
