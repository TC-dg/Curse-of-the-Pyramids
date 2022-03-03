window.onload=function(){    
    login();
}
function castspell() {
    const spell = document.getElementById("spell").value;
    alert(spell);
    $(".blackk").css('opacity', '1');
    showDialog();
    //window.location.href="../../index.html";
}

function showDialog(){
    dialog.style.display="block";
}
function hideDialog(){
    dialog.style.display="none";
    $(".blackk").css('opacity', '0');
}

function login(){
    //document.getElementById("teamname").textContent = "隊名:"+document.getElementById("login").value;
    $.getJSON("../data.json", function (data) {
        //data.teamname = document.getElementById("login").value;
        return $("#teamname").html("隊名:"+data.teamname);
    });
}
