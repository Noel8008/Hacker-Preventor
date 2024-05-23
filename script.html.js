let points = 0 
let pointsTracker = document.getElementById("pointsTracker")

function increasePoints () {
    points = points + 1 

    pointsTracker.innerText = points + " Computer Points"
}
