const images = ["김채원.jpg","르세라핌1.jpg","르세라핌2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("img__tool");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);