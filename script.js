let img = document.getElementsByTagName("img")[0];

img.style.cssText =
  "  display: block;width: 800px;height: 400px;margin: 50px auto;padding: 5px;border: 1px solid #f50;";

// array of src
let p = document.getElementsByTagName("p")[0];

p.style.cssText =
  "  width: 60%;margin: auto;background-color: #000;color: #fff;padding: 10px;text-align: center;font-size: 30px;font-weight: bold;";

  let slideImages = [
  "./imgs/img1.jpg",
  "./imgs/img2.jpg",
  "./imgs/img3.webp",
  "./imgs/img4.webp",
  "./imgs/img5.jpg",
];

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
