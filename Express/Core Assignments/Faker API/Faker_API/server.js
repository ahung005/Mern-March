const express = require("express");
const app = express();
const port = 8000;

const { faker } = require("@faker-js/faker");

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firtName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
});

//  "/api/users/new"
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

//  "/api/companies/new"
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

//  "/api/user/company"
app.get("/api/user/company", (req, res) => {
    res.json({ user: createUser(), company: createCompany() });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));