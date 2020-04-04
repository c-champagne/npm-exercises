const download = require("download-file");
const axios = require("axios");
const wallpaper = require("wallpaper");

//Axios code here

let url = "none";
function getDoggo (doggo) {
    /* console.log(doggo.data.message); */
    url = doggo.data.message;
    console.log("In function " + url);
}

axios.get("https://dog.ceo/api/breed/shiba/images/random")
    .then(getDoggo);


//Download-file code here
 /* let url = doggo.data.message; */
console.log("This is " + url);

let options = {
    directory: "./images",
    filename: "dogbg.jpg"
}

/*  download(url, options, function(err){
    if (err) throw err
    console.log("Bad doggo")
})  */

//Wallpaper code here
/* (async () => {
    await wallpaper.set("dogbg.jpg");

    await wallpaper.get();
}) */