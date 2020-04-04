const download = require("download-file");
const axios = require("axios");
const wallpaper = require("wallpaper");

//Axios code here
function getDoggo (doggo) {
    /* console.log(doggo.data.message); */
    let url = doggo.data.message;
    let options = {
        directory: "./images", 
        filename: "dogbg.jpg"
    }
    
    download(url, options, function(err, data){
        if (err) {
        console.log("Bad doggo");
        return;
        }
        const setWallP = async () => {
            await wallpaper.set("./images/dogbg.jpg");
        }; 
        
        setWallP();
        console.log("Your wallpaper has been set to " + data);
    })
     /* console.log("In function " + url); */
        
    }; 

axios.get("https://dog.ceo/api/breed/shiba/images/random")
    .then(getDoggo);


//Download-file code here
/* let url = doggo.data.message; */
 /* console.log("This is " + url); */

/* let url = "http://i.imgur.com/G9bDaPH.jpg"; //test URL*/

/* let options = {
    directory: "./images", 
    filename: "dogbg.jpg"
}

download(url, options, function(err, data){
    if (err) {
    console.log("Bad doggo");
    return;
    }
    console.log("Your wallpaper has been set to " + data);
}) */  

//Wallpaper code here
/*   const setWallP = async () => {
    await wallpaper.set("./images/dogbg.jpg");
}; 

setWallP();  */