const getUser = (id, cb) => {
    const user = {
        id,
        name: "Ime"
    };
    setTimeout(() => {
        cb(user);
    }, 3000);

}

getUser(10, (user) => {
    console.log(user);
})