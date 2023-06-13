function asagiKaydir() {
    var divinfo = document.getElementById("downdiv");
    var down = document.getElementById("asagibtn");
    down.style.display="none";
    divinfo.style.height = "200px";
    divinfo.style.display="block"
    var upbtn = document.getElementById("yukaribtn");
    upbtn.style.display="inline";
    upbtn.style.display="flex";
    
}

  function yukariKaydir() {
    var divinfo = document.getElementById("downdiv");
    var upbtn = document.getElementById("yukaribtn")
    var downbtn = document.getElementById("asagibtn");
    downbtn.style.display="block";
    upbtn.style.display="none";
    divinfo.style.height = "0px";
    divinfo.style.display="none";

  }


