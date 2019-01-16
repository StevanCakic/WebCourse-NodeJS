const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

// Server
    // GET /
        // some test case
    // GET /users
        // some test case

it("should return hello world reponse", (done) => {
    request(app)
        .get("/")
        .expect(200)
        .expect("Hello World")
        //.expect({error: "Page not found."})
        .expect((res) => {
            console.log(res.body);
        })
        .end(done);
})

it("should return my user object", (done) => {
    request(app)
        .get("/users")
        .expect(200)
        .expect((res)=>{
            expect(res.body).toContainEqual({
                name: "Mike",
                age: 27
            })
        })
        .end(done)
})