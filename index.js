var cursestat = {
    'curse1': '0',
    'curse2': '0',
    'curse3': '0',
    'curse4': '0',
    'curse5': '0',
    'now': '00000',
}

window.onload = function () {
    active();
}

function active() {
    document.getElementById("bott").style.pointerEvents = "none";
    document.getElementById("passwd").style.animationPlayState = "paused";
    document.getElementById("curse").style.animationPlayState = "paused";
    document.getElementById("bpack").style.animationPlayState = "paused";
    document.getElementById("setting").style.animationPlayState = "paused";
    pswdreact.style.display = "none";
    cursereact.style.display = "none";
    bkpkreact.style.display = "none";
    settingreact.style.display = "none";
}

function firstlogin() {
    if (document.getElementById("login").value != "") {
        const teamname = document.getElementById("login").value;
        localStorage.setItem('teamname', teamname);
        $("#teamname").html("隊名:" + localStorage.getItem('teamname'));
        teannameinput.style.display = "none";
    } else {
        /*alert("請輸入隊名");
        return 0;*/
    }
    document.getElementById("passwd").style.animationPlayState = "running";
    document.getElementById("curse").style.animationPlayState = "running";
    document.getElementById("bpack").style.animationPlayState = "running";
    document.getElementById("setting").style.animationPlayState = "running";
    document.getElementById("bott").style.pointerEvents = "auto";
    password();
    localStorage.setItem('LScursestatus', JSON.stringify(cursestat));
    cu = JSON.parse(localStorage.getItem('LScursestatus'));
    tmpnow = "00000";
}


function castspell() {
    const spellinput = document.getElementById("spell").value;
    $.getJSON("static/spell.json", function (spell) {
        $(".blackk").css('opacity', '1');
        document.getElementById("blackk").style.zIndex = 3;
        for (let i = 0; i < Object.keys(spell.spell).length; i++) {
            if (spellinput == spell.spell[i].name) { //right
                document.getElementById("spellconv").style.backgroundColor = "#FFE8C2";
                document.getElementById("spellconv").style.color = "#000000";
                $("#msg").html("密語正確" + "<br>" + spell.spell[i].msg);
                showconv(document.getElementById("spellconv"));
                doit(spellinput);
                break;
            } else { //wrong
                $("#msg").html("密語錯誤");
                showconv(document.getElementById("spellconv"));
            }
        }
    });
}

function password() {
    pswdreact.style.display = "block";
    cursereact.style.display = "none";
    bkpkreact.style.display = "none";
    settingreact.style.display = "none";
    clearother3("curse", "bpack", "setting");
    document.getElementsByClassName("passwd")[0].setAttribute("style", "border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
}

function curse() {
    pswdreact.style.display = "none";
    bkpkreact.style.display = "none";
    settingreact.style.display = "none";
    cursereact.style.display = "block";
    clearother3("passwd", "bpack", "setting");
    document.getElementsByClassName("curse")[0].setAttribute("style", "border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
    checkeye();
}

function backpack() {
    pswdreact.style.display = "none";
    cursereact.style.display = "none";
    bkpkreact.style.display = "block";
    settingreact.style.display = "none";
    clearother3("passwd", "curse", "setting");
    document.getElementsByClassName("bpack")[0].setAttribute("style", "border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
    //tt();
}

function settings() {
    pswdreact.style.display = "none";
    cursereact.style.display = "none";
    bkpkreact.style.display = "none";
    settingreact.style.display = "block";
    clearother3("passwd", "curse", "bpack");
    document.getElementsByClassName("setting")[0].setAttribute("style", "border-color: #33ccff;border-style:solid;border-radius: 10px;border-width: 2px;background-color: rgba(0, 0, 0, 0.3);");
}

function showconv(conver) {
    conver.style.display = "block";
}

function hideconv() {
    spellconv.style.display = "none";
    notdoconv.style.display = "none";
    document.getElementById("blackk").style.zIndex = 1;
    document.getElementById("spellconv").style.backgroundColor = "#700000";
    document.getElementById("spellconv").style.color = "#FFFFFF";
    $(".blackk").css('opacity', '0');
}

function clearother3(a, b, c) {
    document.getElementsByClassName(a)[0].setAttribute("style", " ");
    document.getElementsByClassName(b)[0].setAttribute("style", " ");
    document.getElementsByClassName(c)[0].setAttribute("style", " ");
}
async function checkeye() {
    var eyeimg = document.getElementById("eye");
    eyeimg.src = "static/image/eye" + tmpnow + ".png";
}

async function cur1() {}

async function cur2() {}

async function cur3() {}

async function cur4() {}

async function cur5() {}

function doit(spell) {
    if (spell == "p2") {
        var title = document.getElementById("item2title");
        var jpg = document.getElementById("item2jpg");
        jpg.src = "static/image/panda2.jpg";
        title.innerText = "熊貓變了";
        var item4 = document.getElementById("item4");
        item4.style.display = "none";
    }
    if (spell == "c1") {
        cursestat.curse1 = '1';
        cursestat.now = (cursestat.curse1).toString() + (cursestat.curse2).toString() + (cursestat.curse3).toString() + (cursestat.curse4).toString() + (cursestat.curse5).toString();
    }
    if (spell == "c2") {
        cursestat.curse2 = '1';
        cursestat.now = (cursestat.curse1).toString() + (cursestat.curse2).toString() + (cursestat.curse3).toString() + (cursestat.curse4).toString() + (cursestat.curse5).toString();
    }
    if (spell == "c3") {
        cursestat.curse3 = '1';
        cursestat.now = (cursestat.curse1).toString() + (cursestat.curse2).toString() + (cursestat.curse3).toString() + (cursestat.curse4).toString() + (cursestat.curse5).toString();
    }
    if (spell == "c4") {
        cursestat.curse4 = '1';
        cursestat.now = (cursestat.curse1).toString() + (cursestat.curse2).toString() + (cursestat.curse3).toString() + (cursestat.curse4).toString() + (cursestat.curse5).toString();
    }
    if (spell == "c5") {
        if (document.getElementById("eye").src == "static/image/eye11110.png") {
            cursestat.curse5 = '1';
            cursestat.now = (cursestat.curse1).toString() + (cursestat.curse2).toString() + (cursestat.curse3).toString() + (cursestat.curse4).toString() + (cursestat.curse5).toString();
        } else {
            $("#msg").html("條件不足");
        }
    }
    localStorage.setItem('LScursestatus', JSON.stringify(cursestat));
    cu = JSON.parse(localStorage.getItem('LScursestatus'));
    console.log(cu);
    tmpnow = cu.now;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function cameraon() {
    let scanner = new Instascan.Scanner({
        video: document.getElementById('preview'), // 預覽
        continuous: true, // 連續掃描
        mirror: false,
        refractoryPeriod: 10000,
        backgroundScan: false,
        scanPeriod: 10,
        facingMode: {
            exact: "environment"
        }
    });
    scanner.addListener('scan', function (content) {
        console.log(content);
        getConfirmation();

        function getConfirmation() {
            var retVal = confirm("掃描結果：" + content); // 掃描結果顯示
            if (retVal == true) {
                var checkurl =
                    /^((https?|http?|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; // 檢查是否為網址
                if (checkurl.test(content)) {
                    window.open(content, "_self"); // 開啟網址
                }
                return true;
            } else {
                return false;
            }
        }
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        $('.camera_list li').empty();
        if (cameras.length > 0) {
            cameras.forEach(function (c, i) {
                camera_name = c.name;
                camera_id = i;
                $('.camera_list').append('<li id=' + i + ' class="items"><i class="fa fa-camera fa-lg" aria-hidden="true"></i> 鏡頭 ' + (camera_id + 1) + ' </li>');
            });

            $(".camera_list li").click(function () {
                active = $(this).attr("id");
                scanner.start(cameras[active]);
            });
            if (cameras.length >= 2) {
                scanner.start(cameras[1]);
            } else {
                scanner.start(cameras[0]);
            }
        } else {
            alert("找不到相機...請確認允許使用相機");
        }
    }).catch(function (e) {
        console.error(e);
    });
    const pre = document.getElementById("preview");
    const cam = document.getElementById("camera");
    cam.style.display = "none";
    pre.style.display = "block";
    pre.style.zIndex = "10";
    pre.style.width = "4vw";

    setTimeout(function () {
        const pre = document.getElementById("preview");
        const cam = document.getElementById("camera");
        scanner.stop();
        cam.style.display = "block";
        pre.style.display = "none";
        pre.style.zIndex = "0";
        pre.style.width = "0vw";
    }, 10000);
}


function set1() {
    $(".blackk").css('opacity', '1');
    document.getElementById("blackk").style.zIndex = 3;
    showconv(document.getElementById("notdoconv"));
}