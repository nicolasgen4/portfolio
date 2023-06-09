let images = [
    "public/images/home/img-1.jpg",
    "public/images/home/img-2.jpg",
    "public/images/home/img-3.jpg",
    "public/images/home/img-4.jpg",
    "public/images/home/img-5.jpg",
    "public/images/home/img-6.jpg",
    "public/images/home/img-8.jpg",
    "public/images/home/img-9.jpg"
];

let randomIndex = Math.floor(Math.random() * images.length);

let randomImage = images[randomIndex];

const imageElt = document.getElementById("home-img");

window.onload = () => {
    imageElt.src = images[randomIndex];
};

