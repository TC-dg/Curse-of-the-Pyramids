window.onload=function(){    
    login();
    checkeye();  
}

async function checkeye() {
    var eyeimg=document.getElementById("eye");
    eyeimg.src="..\\image\\eye5.png";
    await sleep(2000);
    eyeimg.src="..\\image\\eye0.png";    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
