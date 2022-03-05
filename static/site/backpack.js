window.onload=function(){    
    login();
    gogo();
}
function gogo() {    
    tt();
}
function tt() {    
    var title = document.getElementById("item2title");
    var jpg = document.getElementById("item2jpg");
    jpg.src="../image/panda2.jpg";
    title.innerText="熊貓變了";    
    await sleep(1000);
    item1.style.display="none";
    item3.style.display="none";
    item4.style.display="none";
    
    
    //document.getElementById("item2").innerHTML = '道具2 <br><img src="..\\image\\panda2.jpg" id="item2jpg">';
    //item2.src="../image/panda2.jpg";
}