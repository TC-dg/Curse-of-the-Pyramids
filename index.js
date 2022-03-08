window.onload=function(){    
    login();
}
function castspell() {
    const spellinput = document.getElementById("spell").value;    
    $.getJSON("static/spell.json", function (spell) {
        $(".blackk").css('opacity', '1');
        document.getElementById("blackk").style.zIndex = 3;
        for (let i = 0; i < Object.keys(spell.spell).length; i++) {
            if (spellinput == spell.spell[i].name) {//right
            document.getElementById("dialog").style.backgroundColor = "#FFE8C2";
            document.getElementById("dialog").style.color = "#000000";
            $("#msg").html("密語正確"+"<br>"+spell.spell[i].msg);
            showDialog();            
            doit(spellinput);
            } else {//wrong
            showDialog();   
            }            
        }
    });   
}
function password(){
    pswdreact.style.display="block";
    cursereact.style.display="none";
    bkpkreact.style.display="none";
    settingreact.style.display="none";
    clearother3("curse","bpack","setting");
    document.getElementsByClassName("passwd")[0].setAttribute("style","border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
}
function curse(){
    pswdreact.style.display="none";
    bkpkreact.style.display="none";
    settingreact.style.display="none";
    cursereact.style.display="block";
    clearother3("passwd","bpack","setting");
    document.getElementsByClassName("curse")[0].setAttribute("style","border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
    checkeye();
}
function backpack(){
    pswdreact.style.display="none";
    cursereact.style.display="none";
    bkpkreact.style.display="block";
    settingreact.style.display="none";
    clearother3("passwd","curse","setting");
    document.getElementsByClassName("bpack")[0].setAttribute("style","border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
    //tt();
}
function settings(){
    pswdreact.style.display="none";
    cursereact.style.display="none";
    bkpkreact.style.display="none";
    settingreact.style.display="block";
    clearother3("passwd","curse","bpack");
    document.getElementsByClassName("setting")[0].setAttribute("style","border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
}
function showDialog(){
    dialog.style.display="block";
}
function hideDialog(){
    dialog.style.display="none";
    document.getElementById("blackk").style.zIndex = 1; 
    document.getElementById("dialog").style.backgroundColor = "#700000";
    document.getElementById("dialog").style.color = "#FFFFFF";
    document.getElementById("msg").textContent ="詛咒錯誤";
    $(".blackk").css('opacity', '0');
}
function firstlogin(){
    teannameinput.style.display="none";
    password();
}
function login(){
    //document.getElementById("teamname").textContent = "隊名:"+document.getElementById("login").value;
    $.getJSON("static/data.json", function (data) {
        //data.teamname = document.getElementById("login").value;
        return $("#teamname").html("隊名:"+data.teamname);
    });    
    pswdreact.style.display="none";
    cursereact.style.display="none";
    bkpkreact.style.display="none";
    settingreact.style.display="none";
}
function clearother3(a,b,c){    
    document.getElementsByClassName(a)[0].setAttribute("style"," ");
    document.getElementsByClassName(b)[0].setAttribute("style"," ");
    document.getElementsByClassName(c)[0].setAttribute("style"," ");
}
async function checkeye() {
    var eyeimg=document.getElementById("eye");
    eyeimg.src="static/image/eye5.png";    
    await sleep(2000);
    eyeimg.src="static/image/eye0.png";    
}
function tt() {    
    var title = document.getElementById("item2title");
    var jpg = document.getElementById("item2jpg");
    jpg.src="static/image/panda2.jpg";
    title.innerText="熊貓變了";    
}

function doit(spell) {
    if (spell =="p2") {        
        var title = document.getElementById("item2title");
        var jpg = document.getElementById("item2jpg");
        jpg.src="static/image/panda2.jpg";
        title.innerText="熊貓變了";
        var item4 = document.getElementById("item4");
        item4.style.display="none";

    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}