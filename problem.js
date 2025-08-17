// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

function reversedString(str){
    const string = str
    const split=string.split("")
    const reverse=split.reverse()
    const join=reverse.join("")
    console.log(join)
}

reversedString('rayhan')

