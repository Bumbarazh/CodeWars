function stray(numbers) {
    const result = numbers.reduce((prev, curr) => {
        return prev ^ curr;
    });
    return result;
}
stray([2, 4, 4, 4]);