const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros =  ["batman" , "flash" , "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// // push doesnt make two arrays into one

// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros , ...dc_heros]
// this method is name spreaddd
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6,],7,[8,[9]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Shamss"));
console.log(Array.from({name: "Shams"}));// it can't be converted 

let score1 = 300
let score2 = 500
let score3 = 800

console.log(Array.of(score1,score2,score3));


