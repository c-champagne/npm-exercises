const download = require("download-file");
const axios = require("axios");
const wallpaper = require("wallpaper");

//Axios code here



//Download-file code here
let url = //Axios url from dog.ceo here

var options = {
    directory: "./images",
    filename: "dogbg.jpg"
}

download(url, options, function(err){
    if (err) throw err
    console.log("Bad doggo")
})

//Wallpaper code here
(async () => {
    await wallpaper.set("unicorn.jpg");

    await wallpaper.get();
})