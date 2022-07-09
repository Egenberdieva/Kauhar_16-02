const name = prompt ("What's your name?")

 alert('Hello ' + name + '!')

const arr1 = [10, 20, 30, 40, 50]
 const arr2 =[1, 2, 3, 4, 5, 6, 7, 8]
if (arr1.length < arr2.length) {
    console.log("Второй массив больше")
} else if (arr1.length > arr2.length) {
    console.log("Первый массив больше")
} else {
    console.log("Они равны")
}

const trafficLight = prompt("Choose the color")
switch (trafficLight) {
    case "green":
        console.log("you can go")
        break;
    case "yellow":
        console.log("soon you can move")
        break;
    case "red":
        console.log("stop, don't cross")
        break;
    default:
        console.log("default")

}





