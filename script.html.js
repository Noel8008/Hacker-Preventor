let bgMusic = new Howl({
    src: ['audio/bgmusic.mp3'],
    autoplay: true, 
    loop: true, 
    volume: .15,
  })


let points = 0 
let pointsTracker = document.getElementById("pointsTracker")
let fence = 0
let guard_dog = 0
let password = 0
let firewall = 0
let VPN = 0

let de_fence = document.getElementById("de_fence")
let cujo = document.getElementById("cujo")
let onetwothreefour = document.getElementById("onetwothreefour")
let firebrick = document.getElementById("firebrick")
let China = document.getElementById("china")

let sound1 = new Howl({
    src: ["audio/gate.mp3"],
    volume: .10,
})
let sound2 = new Howl({
    src: ['audio/guard_dog.mp3'],
})
let sound3 = new Howl({
    src: ['audio/password.mp3'],
})
let sound4 = new Howl({
    src: ['audio/firewall.mp3'],
})
let sound5 = new Howl({
    src: ['audio/vpn.mp3'],
})
let clicksound = new Howl({
    src: ['audio/click.mp3'],
    volume: .15
})


function increasePoints () {
    points = points + 1
    pointsTracker.innerText = points.toFixed(0) + " Computer Points"
    clicksound.play()
    clickmeNOW.classList.add("animate__animated")
    clickmeNOW.classList.add("animate__bounce")
}

function fenceAdd(){
    let cost = 10 + fence ** 1.5 
    if (points < cost) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        fence = fence + 1
        
        points = points - cost 
        pointsTracker.innerText = points.toFixed(0) + " Computer Points" 
         cost = cost + fence ** 1.5
         de_fence.innerText = "Cost:" + cost.toFixed(0);
         sound1.play()

    }
}



function guard_dogAdd(){
    let cost = 300 + guard_dog ** 2.5
    if (points < cost) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        guard_dog = guard_dog + 1 
        
        points = points - cost
        pointsTracker.innerText = points.toFixed(0) + " Computer Points" 
        cost = cost + guard_dog ** 3.0
        cujo.innerText = "Cost:" + cost.toFixed(0);
        sound2.play()
    }
}



function passwordAdd(){
    let cost = 1000 + password ** 4.0
    if (points < cost) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        password = password + 1 

        points = points - cost
        pointsTracker.innerText = points.toFixed(0) + " Computer Points" 
        cost = cost + password ** 5.0
        onetwothreefour.innerText = "Cost:" + cost.toFixed(0)
        sound3.play()
    }
}



function firewallAdd(){
    let cost = 50000 + firewall ** 5.5
    if (points < cost) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        firewall = firewall + 1

        points = points - cost
        pointsTracker.innerText = points.toFixed(0) + " Computer Points" 
        cost = cost + firewall ** 6.5
        firebrick.innerText = "Cost:" + cost.toFixed(0)
        sound4.play()
    }
}


function VPNAdd(){
    let cost = 100000 + VPN ** 7.0
    if (points < cost) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        VPN = VPN + 1 

        points = points - cost
        pointsTracker.innerText = points.toFixed(0) + " Computer Points" 
        cost = cost + VPN ** 7.0 
        China.innerText = "Cost:" + cost.toFixed(0)
        sound5.play()
    }
}




function gameloop() {
    points = points + (fence * 1) + (guard_dog * 15) + (password * 100) + (firewall * 500) + (VPN * 1000)
    pointsTracker.innerText = points.toFixed(0) + " Computer Points"
    if (points < 10 + fence ** 1.5){
    document.getElementById("fencebtn").disabled = true
    }else{
    document.getElementById("fencebtn").disabled = false
}
    if (points < 300 + guard_dog ** 2.5){
    document.getElementById("guard_dogbtn").disabled = true
    }else{
    document.getElementById("guard_dogbtn").disabled = false
} 
    if (points < 1000 + fence ** 4.0){
    document.getElementById("passwordbtn").disabled = true
    }else{
    document.getElementById("passwordbtn").disabled = false
} 
    if (points < 50000 + firewall ** 5.5){
    document.getElementById("firewallbtn").disabled = true
    }else{
    document.getElementById("firewallbtn").disabled = false
} 
    if (points < 100000 + VPN ** 7.0){
    document.getElementById("VPNbtn").disabled = true
    }else{
    document.getElementById("VPNbtn").disabled = false
}
}

let soundPlaying = true;

  function muteMusic() {
    if(soundPlaying == true){
    bgMusic.pause();
    document.getElementById("musicController").innerText = "Unmute Music"
    soundPlaying = false;
    }else{
        bgMusic.play()
        document.getElementById("musicController").innerText = "Mute Music"
        soundPlaying = true
    }
    
  }
setInterval(gameloop, 1000)