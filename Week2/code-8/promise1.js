function asyncAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Arguments must be numbers");
            }
        }, 1000)
    })
}

asyncAdd(5, 7).then((res) => {
    console.log("Result is", res);
    return asyncAdd(res, 10);
}).then((res) => {
    console.log("Final result", res);
}).catch(error => {
    console.log(error)
});