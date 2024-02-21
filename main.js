function playSound(soundID) {
    document.querySelector(soundID).play();
}

const taleList = document.querySelectorAll('.tecla');
// let counter = 0;

// while (counter < taleList.length) {
//     const element = taleList[counter];
//     const soundID = `#som_${element.classList[1]}`;

//     element.onclick = function () {
//         playSound(soundID);
//     }

//     counter = counter + 1
// }

for (let i = 0; i < taleList.length; i++) {
    const element = taleList[i];
    const soundID = `#som_${element.classList[1]}`;

    element.onclick = function () {
        playSound(soundID);
    }
}

