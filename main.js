function playSound(soundID) {
    const element = document.querySelector(soundID)

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('Elemento não encontrado!');
        console.log('Elemento não encontrado!');
    }
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

    element.onkeydown = function (event) {

        console.log(event.code);

        if (event.code === 'Space' || event.code === 'Enter')
            element.classList.add('ativa');
    }

    element.onkeyup = function () {
        element.classList.remove('ativa');
    }
}

