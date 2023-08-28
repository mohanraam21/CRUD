let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))

app.use(cors())

let port = process.env.PORT || 8080

let fetch = require('./fetch/fetch')
let insert = require('./insert/insert')
let update = require('./update/update')
let remove = require('./delete/delete')

app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remove)

app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})
