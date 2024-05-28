let points = 0 
let pointsTracker = document.getElementById("pointsTracker")
let fence = 0
let guard_dog = 0 
let password = 0
let firewall = 0 
let VPN = 0


function increasePoints () {
    points = points + 1
    pointsTracker.innerText = points + " Computer Points"
}

function fenceAdd(){
    if (points < 10) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        fence = fence + 1
        points = points - 10 
        pointsTracker.innerText = points + " Computer Points" 
    }
}



function guard_dogAdd(){
    if (points < 300) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        guard_dog = guard_dog + 1
        points = points - 300 
        pointsTracker.innerText = points + " Computer Points" 
    }
}



function passwordAdd(){
    if (points < 1000) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        password = password + 1
        points = points - 1000
        pointsTracker.innerText = points + " Computer Points" 
    }
}



function firewallAdd(){
    if (points < 50000) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        firewall = firewall + 1
        points = points - 50000 
        pointsTracker.innerText = points + " Computer Points" 
    }
}


function VPNAdd(){
    if (points < 100000) {
        alert("YOU BROKE ASLLL ROFLLLL")
    }else{
        VPN = VPN + 1
        points = points - 100000
        pointsTracker.innerText = points + " Computer Points" 
    }
}


function gameloop() {
    points = points + (fence * 1) + (guard_dog * 15) + (password * 100) + (firewall * 500) + (VPN * 1000)
    pointsTracker.innerText = points + " Computer Points"
}

setInterval(gameloop, 1000)