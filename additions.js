//Addition
let stdin=process.openStdin()
stdin.addListener("data", function (str) {
   let x= parseInt(str)
        let stdin1=process.openStdin()
        console.log('+')
        stdin1.addListener("data", function (str1){
            let x1= parseInt(str1)+x;
            console.log('Total='+ x1.toString().trim())
        stdin.destroy() 
        });
 });