function eachIteration (a) {
    if (a > 10) {
        return a;
    }

    a++;

    return eachIteration(a);
}

console.log(eachIteration(1));