const express = require("express")
const app = express()
const port = 5000
app.listen(port, (error) =>error ? console.log("the surver is not runing") : console.log(`the surver is running at port ${port}`))
function dates(current) {
    var week= new Array(); 
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() +1);
    }
    return week; 
    next()
}
console.log(dates(new Date(2017, 1, 27)));


   


app.get("/Contactus",dates,  (req, res, next) => {
    res.sendFile(__dirname+"/Components/Contactus.html")
    console.table({method:req.method,path:req.url})
})
app.get("/Home",dates, (req,res, next)=> {
    res.sendFile(__dirname+"/Components/Home.html")
    console.table({method : req.method, path:req.url})
})
app.get('/OurServices', dates, (req, res, next) => {
    res.sendFile(__dirname+"/Components/OurServices.html")
    
})