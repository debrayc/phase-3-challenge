const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000

app.get( '/api/days/:day', ( req, res ) => {
    let day = req.params.day.toLowerCase()
    let daysOfWeek = { monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 }
    daysOfWeek[ day ] ?
    res.status(200).set( 'Content-Type', 'text/plain' ).send( daysOfWeek[ day ].toString() ) :
    res.status(400).set('Content-Type', 'text/plain').send(`{response: ${day} is not a valid day !}`)   
})

app.post( '/api/array/concat/', bodyParser.json(), ( req, res ) => {
    let body = req.body
    let array1 = body.array1
    let array2 = body.array2
    if ( Array.isArray(array1) && Array.isArray( array2 )) {
        res.set( 'Content-Type', 'application/json' ).sendStatus(200).json({"result": array1.concat( array2 )})
    } else {
        res.set( 'Content-Type', 'application/json' ).sendStatus(400).send(`{"error": Input data should be of type Array}`)
    }
})

app.listen( port, () => console.log( `LIVE on localhost:` + port ))

