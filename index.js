const videoTag = document.querySelector("video")

function checkLetter(userKey){
    const log = () => console.log(`Current Rate: ${videoTag.playbackRate.toFixed(2)}`)
    switch(userKey){
        case "d":
            videoTag.playbackRate += .1
            log()
            break;
        case "s":
            videoTag.playbackRate -= .1
            log()
            break;
        case "r":
            videoTag.playbackRate = 1
            log()
            break;
        default: 
        break;
    }
    updateSpeedNode()
}

function createButtons () {
    const speedDownButton = document.createElement('button')
    const speedUpButton = document.createElement('button')
    const videoContainer = document.querySelector('.video-container')
    const myPersonalVideoControls = document.createElement('div')
    const countSpan = document.createElement('span')
    const myButtons = [speedDownButton, speedUpButton]

    countSpan.id = 'current-playback-speed'
    const rateTextNode = document.createTextNode(videoTag.playbackRate.toFixed(2))
    countSpan.appendChild(rateTextNode)

    const cssTemplate = `
        border: 0px;
        padding: 10px;
        margin: 10px;
        color: white;
        background: #00cb79;
        border-radious: 4px;
        font-weight: 900;
        cursor: pointer;
    `

    myButtons.forEach(button => {
        let currentTextNode
        button.style = cssTemplate

        if (button === speedUpButton) {
            currentTextNode = document.createTextNode("speed up")
            button.id= "speed-up"
        } else {
            currentTextNode = document.createTextNode('speed-down')
            button.id = 'speed-down'
        }

        button.appendChild(currentTextNode)
        myPersonalVideoControls.appendChild(button)

        button.addEventListener('click', e => {
            if(e.target.id === "speed-up") {
                videoTag.playbackRate += 0.1
            } else {
                videoTag.playbackRate -= 0.1
            }

            updateSpeedNode ()
        })
    })

    myPersonalVideoControls.appendChild(countSpan)
    videoContainer.appendChild(myPersonalVideoControls)

    myPersonalVideoControls.style.position = 'fixed'
    myPersonalVideoControls.style.top = '70px'
    myPersonalVideoControls.style.left = '10px'
}


function updateSpeedNode(){
    document.getElementById('current-playback-speed').innerHTML = videoTag.playbackRate.toFixed(2)
}

if (!videoTag) {
    console.warn("No video for speed controller") 
    } else {
        document.addEventListener('keydown', e => {
            checkLetter(e.key)
        })

        createButtons () 
}