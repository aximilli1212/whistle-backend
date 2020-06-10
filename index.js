'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: "{YOUR-AUTH0-DOMAIN}",
    algorithms: ['RS256']
});


app.get('/api/activities', (req, res) => {
    let whistleBlowerActivities = [
        {
            title: '200 Million dollars cash found in Burger King, Utah',
            location: 'Salt Lake City, Utah, America'
        },
        {
            title: '52 billion naira found by EFCC in a Bungalow in Ikoyi',
            location: 'Lagos, Nigeria',
        },
        {
            title: '2 Million Kenyan Shillings found in Yaya Supermarket laundry',
            location: 'Nairobi, Kenya',
        },
        {
            title: '10 Ferraris discovered in underground apartment in Bueno Aires',
            location: 'Bueno Aires, Argentina',
        },
        {
            title: 'Central Bank Printing Machine found in a church at Guanajuato',
            location: 'Guanajuato, Mexico',
        },
        {
            title: "32 Million Cedis cash found in Senator Daula's home in Accra",
            location: 'Accra, Ghana',
        }];

    res.json(whistleBlowerActivities);
})




app.listen(3333);
console.log('Listening on localhost:3333');


