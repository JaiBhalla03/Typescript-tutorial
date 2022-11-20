var grandParent = document.querySelector(".grandparent");
var parent1 = document.querySelector(".parent");
var child = document.querySelector(".child");
//exmaple of bubbling in event listeners
grandParent.addEventListener("click", function (e) {
    console.log("grandparent");
});
parent1.addEventListener("click", function (e) {
    console.log("parent");
});
//another way is by capturing
child.addEventListener("click", function (e) {
    console.log("child");
}, { capture: true });
//event listener for keypress
var containerA = document.getElementById("A");
var containerB = document.getElementById("B");
var containerC = document.getElementById("C");
var containerD = document.getElementById("D");
var container = [containerA, containerB, containerC, containerD];
var changeStyle = function (e) {
    if (e.code === "KeyA") {
        container[0].style.backgroundColor = "white";
        container[0].style.color = "black";
    }
    else if (e.code === "KeyB") {
        container[1].style.backgroundColor = "white";
        container[1].style.color = "black";
    }
    else if (e.code === "KeyC") {
        container[2].style.backgroundColor = "white";
        container[2].style.color = "black";
    }
    else if (e.code === "KeyD") {
        container[3].style.backgroundColor = "white";
        container[3].style.color = "black";
    }
};
document.addEventListener("keypress", changeStyle);
