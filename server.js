const { response } = require("express");
const express = require("express");
// express is just a function in library
const app = express();
//put express function in app
const faker = require("faker")
// importing faker


// const port = 8000;
// can put this in the end


class User{
    constructor(){
        this.id = `${faker.random.uuid()}`;
        this.name = `${faker.name.findName()}${faker.name.lastName()}`; //dont forget to invoke funciton
        this.phoneNumber = `${faker.phone.phoneNumber()}`;
        this.email = `${faker.internet.email()}`;
        this.password = `${faker.internet.password()}`;
    }
}
class Company{
    constructor(){
        this.id = faker.random.uuid(); //dont necessarily need `${}` unless multiple entries
        this.company = `${faker.company.companyName()}`; //dont forget to invoke funciton
        this.address = `${faker.address.streetAddress()}`;
        this.country = `${faker.address.country()}`;
    }
}



//add get route here
app.get("/api/user/new", (request, response) =>{
    // console.log(request); //puts alot of crap in the commandprompt
    // response.json({message: "we are live!!"})
    // response.json({message: "the 2nd we are live!!"})
    // can only take 1 response
    response.json({theUser: new User()});
})

app.get("/api/companies/new", (request, response) => {
    response.json({theCompany: new Company()})
})

app.get("/api/user/company", (request, response) => {
    response.json({
        bothCompany: new Company(),
        bothUser: new User()})
})


// app.post("/api", (req, res) => {
//     res.json({message:"the POST api you made"})
// })

app.listen(8080, () => {
    console.log("app is running on the port you created 8080!");
})
















// nodemon server.js runs the file
// nodemon refreshes automatically
// nodemon is watches the folder, looking for extensions with js,mjs, or json