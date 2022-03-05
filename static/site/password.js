window.onload=function(){    
    login();
}
function castspell() {
    const spellinput = document.getElementById("spell").value;    
    $.getJSON("./spell.json", function (spell) {
        $(".blackk").css('opacity', '1');
        document.getElementById("blackk").style.zIndex = 3;
        for (let i = 0; i < Object.keys(spell.spell).length; i++) {
            if (spellinput == spell.spell[i].name) {//right
            document.getElementById("dialog").style.backgroundColor = "#FFE8C2";
            document.getElementById("dialog").style.color = "#000000";
            $("#msg").html("密語正確"+"<br>"+spell.spell[i].msg);
            showDialog();   
            } else {//wrong
            showDialog();   
            }            
        }
    });   
}
function showDialog(){
    dialog.style.display="block";
}
function hideDialog(){
    document.getElementById("blackk").style.zIndex = 1; 
    dialog.style.display="none";
    document.getElementById("dialog").style.backgroundColor = "#700000";
    document.getElementById("dialog").style.color = "#FFFFFF";
    document.getElementById("msg").textContent ="詛咒錯誤";
    $(".blackk").css('opacity', '0');
}

function login(){
    //document.getElementById("teamname").textContent = "隊名:"+document.getElementById("login").value;
    $.getJSON("../data.json", function (data) {
        //data.teamname = document.getElementById("login").value;
        return $("#teamname").html("隊名:"+data.teamname);
    });
}
