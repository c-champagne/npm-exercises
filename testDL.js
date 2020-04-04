var download = require('download-file')
 
var url = "http://i.imgur.com/G9bDaPH.jpg"
 
var options = {
    directory: "./images",
    filename: "cat.gif"
}
 
download(url, options, function(err){
    if (err) throw err
    console.error(err)
})