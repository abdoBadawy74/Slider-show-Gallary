let slideImages = [
  "./imgs/img1.jpg",
  "./imgs/img2.jpg",
  "./imgs/img3.webp",
  "./imgs/img4.webp",
  "./imgs/img5.jpg",
];

let img = document.getElementsByTagName("img")[0];

let i = 0;

let slideShow = () => {
  img.src = slideImages[i];
  if (i < slideImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slideShow()", 1000);
};

slideShow();
