// Sum Arrays
// {
//     function sum(numbers) {
//         return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//       }
// }
// __________________________________________________________________________;
// Beginner Series #1 School Paperwork
// {
//     function paperwork(n, m) {
//         if (n <= 0 && m <= 0){
//             return 0
//         }else if(n <= 0 && m >= 0 || n >= 0 && m <= 0){
//             return 0
//         }else if (n > 0 && m > 0){
//             return n * m
//         }
//     }
// console.log(paperwork(5,5));
// }
// __________________________________________________________________________;
// Beginner Series #2 Clock
// {
//   function past(h, m, s) {
//     return h * 3600000 + m * 60000 + s * 1000;
//   }
//   console.log(past(0,1,1));
// }
// __________________________________________________________________________;
// MakeUpperCase
// {
//   function makeUpperCase(str) {
//     return str.toUpperCase();
//   }
//   console.log(makeUpperCase("hello"));
// }
// __________________________________________________________________________;
// Simple multiplication
// {
//     function simpleMultiplication(n) {
//         return n % 2 === 0 ? n * 8 : n * 9;
//       }
// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(1));
// }
// __________________________________________________________________________;
// Are You Playing Banjo?
// {
//     function areYouPlayingBanjo(name) {
//                if (name.charAt(0).toLowerCase() === 'r') {
//           return `${name} plays banjo`;
//         } else {
//           return `${name} does not play banjo`;
//         }
//       }
// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Paul"));
// }
// __________________________________________________________________________;
// Calculate average
// {
//     function findAverage(array) {
//         if (array.length === 0) return 0; // Handle edge case where the array is empty
//         const sum = array.reduce((acc, curr) => acc + curr, 0);
//         return sum / array.length;
//       }

//       module.exports = findAverage;
//       console.log(findAverage([1,1,1]));
// }
// __________________________________________________________________________;

// Invert values
// {
// function invert(array) {
//     return array.map(n => -n);
//   }

//   module.exports = invert;
//     console.log(norm(invert([1,2,3,4,5])));
//     console.log(norm(invert([1,-2,3,-4,5])));
// }

// __________________________________________________________________________;
// Fake Binary
// {
// function fakeBin(x) {
//     return x.split('').map(digit => digit < '5' ? '0' : '1').join('');
//   }

//   console.log(fakeBin('45385593107843568'));
//   console.log(fakeBin('509321967506747'));
// }

// __________________________________________________________________________;
// Who likes it?
// {
// function likes(names) {
//     const count = names.length;

//     if (count === 0) {
//       return 'no one likes this';
//     } else if (count === 1) {
//       return `${names[0]} likes this`;
//     } else if (count === 2) {
//       return `${names[0]} and ${names[1]} like this`;
//     } else if (count === 3) {
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else {
//       return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
//     }
//   }

//   console.log(likes([]));
//   console.log(likes(['Peter']));
//   console.log(likes(['Jacob', 'Alex']));
// }
