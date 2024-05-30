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



function increasePoints () {
    points = points + 100000
    pointsTracker.innerText = points.toFixed(0) + " Computer Points"
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
    }
}


function gameloop() {
    points = points + (fence * 1) + (guard_dog * 15) + (password * 100) + (firewall * 500) + (VPN * 1000)
    pointsTracker.innerText = points.toFixed(0) + " Computer Points"
}

setInterval(gameloop, 1000)