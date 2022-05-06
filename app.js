var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("Testing ExpressJS")
})

// Endpoint for lessons
app.get('/lessons', function(req, res){
    let lessons = [
        {
            "id": 0,
            "topic": "Chemistry",
            "location": "China",
            "price": 1000
        },
        {
            "id": 1,
            "topic": "English",
            "location": "South America",
            "price": 2500
        },
        {
            "id": 2,
            "topic": "Mathematics",
            "location": "Belarus",
            "price": 1600
        },
        {
            "id": 3,
            "topic": "Geology",
            "location": "Madgascar",
            "price": 400
        }
    ]
    res.header("Access-Control-Allow-Origin", "*")
    res.send(lessons)
})

//Endpoint for user's details
app.get('/user', function(req, res){
    let users = {
        "email": "user1@gmail.com",
        "password": "user4321"
    }
    res.send(users)
})
app.listen(3000)
