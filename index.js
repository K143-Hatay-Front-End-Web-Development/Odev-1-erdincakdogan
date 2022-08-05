const palindrome = (a) => a === a.split("").reverse().join("")
let max = 0
    for (let x= 100; x < 1000 ;x++) {
        for (let y =100; y < 1000; y++) {
            const a = (x*y)
            if (a > max && palindrome(a.toString())) {
                max= a;
            }
        }
    }
    console.log(max)