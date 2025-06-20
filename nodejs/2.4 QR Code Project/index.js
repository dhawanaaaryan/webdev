/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import f from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {"message":"Enter Your URL:","name":"URL"}
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(f.createWriteStream('qr.png'));
    f.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("qr generated sucessfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });