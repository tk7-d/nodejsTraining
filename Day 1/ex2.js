let x = 0;
const y = setInterval(() => {
    console.log('Hello World');
    x += 1;
    if (x === 5) {
        console.log('Done');
        clearInterval(y);
    }
}, 1000);