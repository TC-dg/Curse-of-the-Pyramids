/*const fs = require('fs');
const jsonData= require('./static/data.json'); 
console.log(jsonData);
let newdata = { 
    "teamname":"panda",
    "curse1":0,
    "curse2":0,
    "curse3":0,
    "curse4":0,
    "curse5":0   
};
let newjson = JSON.stringify(newdata, null, '\t');
fs.writeFileSync('./static/data.json', newjson);*/

window.onload=function(){    
    login();
}

function login(){
    //document.getElementById("teamname").textContent = "隊名:"+document.getElementById("login").value;
    $.getJSON("./static/data.json", function (data) {
        //data.teamname = document.getElementById("login").value;
        $("#teamname").html("隊名:"+data.teamname);
    });
}