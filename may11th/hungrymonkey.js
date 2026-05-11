function canFinish(speed,piles,hours){
    //Given 
    // speed - bananas the monkey eats per hour
    // piles - array of pile size, e.g. [3,6,7,11]
    // The monekey has 8 hours
    
    // Return: true if the monkey can eat all bananas in 8 hours
    // Examples: canFinish(4, [3,6,7,11]) -> true (1+2+2+3=8 <=8)
    //           canFinish(3, [3,6,7,11]) -> false (1+2+3+4=10 >8)

    let totalHours = 0;
    for (const pile of piles) {
        totalHours += Math.ceil(pile / speed);
    }
    console.log("Total hours:", totalHours);
    return totalHours <= hours;
}

console.log(canFinish(4, [3,6,7,11], 8));
console.log(canFinish(3, [3,6,7,11], 8));

function minEatingSpeed(piles, hours) {
    //Given 
    // piles - array of pile size, e.g. [3,6,7,11]
    // hours - time limit (e.g.8)
    
    // Return: the smallest speed where canFinish returns true
    // Examples: minEatingSpeed([3,6,7,11], 8) -> 4
    //           minEatingSpeed([30,11,23,4,20], 5) -> 30
    let lo = 1;
    let hi = Math.max(...piles);

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (canFinish(mid, piles, hours)) {
            hi=mid;
        } else {
            lo = mid + 1; 
        }
    }
    return lo;
}

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));