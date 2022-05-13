let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let req1 = [null, 200];
let req2 = [100, 350];
let req3 = [200, null];
const array = []

function fu(a, b) {
    const arr = courses.forEach(element => {
        const log = element.prices
        if (log[0] >= a && log[1] >= a && log[0] <= b && log[1] <= b) {
            return array.push(element)
        } else {
            return null
        }
    })
    console.log(array)
}

console.log(fu(100, 350))

































