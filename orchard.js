///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55


// PROBLEM 1

/*
    Using for loop, calculate the total number of acres picked for the entire week.
    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

let totalAcres = 0
totalAcres2 = fujiAcres.concat(galaAcres,pinkAcres)
for(i = 0; i < totalAcres2.length; i++){
    totalAcres = totalAcres + totalAcres2[i]
}
console.log("Answer 1 ------------------")
console.log(totalAcres)

// I started out by seriously overcomplicating Problem 1, and then I searched "how to combine arrays js" in www.w3schools.com. Once I saw how to concatenate them, it made the rest of the problem much easier.




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    Save the answer to a variable called `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / fujiAcres.length
console.log("Answer 2 ------------------")
console.log(averageDailyAcres)

// Problem 2 was very easy, I didn't need to reference any of the handouts or my notes because I could remember how to do these parts off the top of my head.




// PROBLEM 3

/*
    We have provided 2 variables below. 
        The `acresLeft` variable is the number of acres that still have apples left. 
        The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
        Write a while loop that will continue to run while `acresLeft` is above 0. 
        On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left
    Outside the loop, log `days` to the console.
    Note: This is not the most efficient way to calculate this number. But! It is a great
    way to get a whole number without using any Math methods. 
*/

let acresLeft = 174 
let days = 0
while(acresLeft > 0){
days += 1, acresLeft -=averageDailyAcres
}
console.log("Answer 3 ------------------")
console.log(days)

// I had to pull the "+= 1" from an example in one of the handputs; it made Problem 3 much easier.





// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
        Each acre yields 6.5 tons of apples.
    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.
    Log each of your arrays to the console.
    Hint: you can use the slice method to make copies of the arrays and 
    then loop the copies. You could also make empty arrays, loop the old ones
    and use the push method to add new values to the new arrays.
*/


let fujiTons = []
let galaTons = []
let pinkTons = []

for(i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
}
for(i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
}
for(i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log("Answer 4 ------------------")
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// I got really hung up on Problem 4 for a while, until I checked the MAKING DECISIONS 2 handout and remembered I needed to reference the array in front of the [i] and inside of the .push() function.





// PROBLEM 5

/*
    Next, calculate the total number of pounds picked per variety.
    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 
    Log each of the values to the console.
    Hint: there are 2000 pounds in a ton.
*/

let totalFujiTons = 0
let totalGalaTons = 0
let totalPinkTons = 0

for(i = 0; i < fujiTons.length; i++){
    totalFujiTons = totalFujiTons + fujiTons[i]
}
for(i = 0; i < galaTons.length; i++){
    totalGalaTons = totalGalaTons + galaTons[i]
}
for(i = 0; i < pinkTons.length; i++){
    totalPinkTons = totalPinkTons + pinkTons[i]
}

let fujiPounds = totalFujiTons * 2000
let galaPounds = totalGalaTons * 2000
let pinkPounds = totalPinkTons * 2000

console.log("Answer 5 ------------------")
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

// Problem 5 was much easier, as it used the same functions as previous problems.






// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices given 
    at the beginning of this file to figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/



let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Answer 6 ------------------")
console.log('$' + fujiProfit)
console.log('$' + galaProfit)
console.log('$' + pinkProfit)

// For problem 6 I wondered if it was too simple to just do the math, but since there werem't any instructions to use arrays or loops, I figured this would be okay.






// PROBLEM 7

/*
    Add up all your profits and save the number to a variable called `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Answer 7 ------------------")
console.log('$' + totalProfit)

// Same with problem 7, I just did the math since there were no instuctions to do it any other way.
// I hope you like my console.log "Answer # -----------" formatting!