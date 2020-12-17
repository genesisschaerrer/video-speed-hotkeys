const videoTag = document.querySelector("video")

document.addEventListener('keydown', e => {
    checkLetter(e.key)
})

function checkLetter(userKey){
    switch(userKey){
        case "d":
            videoTag.playBackRate += .1
            console.log(`Current Rate: ${videoTag.playBackRate.toFixed(2)}`)
            break;
        case "s":
            videoTag.playBackRate -= .1
            break;
        case "r":
            videoTag.playBackRate = .1
            break;
    }
    console.log(`Current Rate: ${videoTag.playBackRate.toFixed(2)}`)
}