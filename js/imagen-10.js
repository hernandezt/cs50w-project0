console.log("matriz-de-imagenes")
// Get the modal
var modal = document.getElementById('Modal-10');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img-j');
var modalImg = document.getElementById("img10");
var captionText = document.getElementById("caption-10");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
}