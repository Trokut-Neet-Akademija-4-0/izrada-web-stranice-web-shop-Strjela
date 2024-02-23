const mainImg = document.getElementById("mainImg");
const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgTre = document.getElementById("imgTre");

imgOne.addEventListener("click", function () {
  mainImg.src = "/public/img/skyCour/sky1.jpg";
  imgOne.classList.add("border-gray-900");
  imgTwo.classList.remove("border-gray-900");
  imgTre.classList.remove("border-gray-900");
});

imgTwo.addEventListener("click", function () {
  mainImg.src = "/public/img/skyCour/sky3.jpg";
  imgTwo.classList.add("border-gray-900");
  imgOne.classList.remove("border-gray-900");
  imgTre.classList.remove("border-gray-900");
});

imgTre.addEventListener("click", function () {
  mainImg.src = "/public/img/skyCour/sky4.jpg";
  imgTre.classList.add("border-gray-900");
  imgTwo.classList.remove("border-gray-900");
  imgOne.classList.remove("border-gray-900");
});
