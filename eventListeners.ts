const grandParent = document.querySelector(".grandparent")
const parent1 = document.querySelector(".parent")
const child = document.querySelector(".child")
//exmaple of bubbling in event listeners

grandParent.addEventListener("click", e=>{
    console.log("grandparent")
})

parent1.addEventListener("click", e=>{
    console.log("parent")
})
//another way is by capturing
child.addEventListener("click", e=>{
    console.log("child")
},{capture: true})

//event listener for keypress

const containerA = document.getElementById("A")
const containerB = document.getElementById("B")
const containerC = document.getElementById("C")
const containerD = document.getElementById("D")

const container = [containerA, containerB, containerC, containerD]

const changeStyle = (e) =>{
    if(e.code === "KeyA"){
        container[0].style.backgroundColor="white";
        container[0].style.color="black";
    }
    else if(e.code === "KeyB"){
        container[1].style.backgroundColor="white";
        container[1].style.color="black";
    }
    else if(e.code === "KeyC"){
        container[2].style.backgroundColor="white";
        container[2].style.color="black";
    }
    else if(e.code === "KeyD"){
        container[3].style.backgroundColor="white";
        container[3].style.color="black";
    }
}

document.addEventListener("keypress", changeStyle);

