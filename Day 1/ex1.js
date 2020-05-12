const ex1 = delay => {
    console.log('Hello after ' + delay + ' seconds');
};
setTimeout(ex1, 4 * 1000, 4);
setTimeout(ex1, 8 * 1000, 8);