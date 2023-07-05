var x = 23;


function checkPrime(num) {
    let isPrime = true;
    if (num == 1) return false;

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime)

}

checkPrime(x)