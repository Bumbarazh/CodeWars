function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let nextNum;
    if (Math.sqrt(sq) % 1 === 0) {
        return nextNum = Math.pow(Math.sqrt(sq) + 1, 2);
    } else {
        return -1
    }
}
findNextSquare(121)