function map(elements,modifiers) {
    return elements.map((x) => modifiers(x));
}

function isEven(number) {
    return number % 2 === 0;
}
console.log(map([5, 8, 10], isEven));