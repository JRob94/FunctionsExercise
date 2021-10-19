// Functions Exercise

// 1
function spookyGhost (){
    console.log("Boo!!!");
}
spookyGhost();

console.log("=======");

// 2
function candy (goal){
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
candy("Get Candy")

console.log("=======");

// 3
function werewolf(a, b){
    if (a === "Full" & b === "Moon"){
        return `ARH-WOOO!`
    }
}
werewolf();
console.log(werewolf(`Full`, `Moon`));

console.log("=======");

// 4
function halloween (){
    return `October 31st`;
}
halloween();
console.log(halloween());

console.log("=======");

// 5
function isEnoughCandy (pieces){
    if (pieces >= 31){
        return true;
    } else (pieces < 31)
        return false;
}
console.log(isEnoughCandy(32));

console.log("=======");

// 6
function candyCounter(num){
    let total = 0;
    for (n of num) {
        total = total + n;
    }
    return total;
}
console.log(candyCounter([1, 2, 3, 4]));
console.log(candyCounter([100, 200]));

console.log("=======");

// 7
const hauntedMansion = function (){
    console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);
}
hauntedMansion();

console.log("=======");

// 8
ghostbusters = () => `Who you gonna call?`
console.log(ghostbusters());

console.log("=======");

// 9
// no

// 10
// Yes

// 11a
const costumes = [`Ghost`, `Princess`, `Pirate`];
// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());
console.log(upperCostumes);