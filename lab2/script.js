function changeFont() {
        var czcionka = document.getElementById('cont');
        if (czcionka.className == "sans") {
          czcionka.className = 'langar';
        } else {
          czcionka.className = 'sans';
        }
}

function changeTextColor() {
        document.getElementById("rainbow").style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}

function changeBackgroundColor() { 
        document.body.style.backgroundColor =  "#"+((1<<24)*Math.random()|0).toString(16); 
}


alert("Witaj podróżniku ");


function openGoogle() {
        window.open("https://www.google.com");
}


function popUp() {
var popUp = window.open("", "MsgWindow", "width=200,height=100");
popUp.document.write("<p>Okienko popup życzy Ci miłego dnia. Uśmiechnij się i zamknij to okienko :)</p>");
}


function catchMe() {
        var btn = document.getElementById("catchme");
        btn.style.position ='absolute';
        btn.style.top = Math.floor(Math.random()*90+5)+'%';
        btn.style.left = Math.floor(Math.random()*90+5)+'%';
}


function fontIncrease() {
        var size = $('button').css('font-size');
        $('button').css('font-size', parseInt(size)+2);
}


function fontDecrease() {
        var size = $('button').css('font-size');
        $('button').css('font-size', parseInt(size)-2)
}


function fontReset() {
        var size = $('button').css('font-size');
        $('button').css('font-size', parseInt(size=18))
}


function niespodzianka() {
        document.getElementById("niespodzianka").innerHTML = "Pobita szklanka";
}


function copyText() {
        document.getElementById("pole2").value=document.getElementById("pole1").value;
}


function hideBox() {
        document.getElementById('ninja').style.visibility='hidden';
}


$(document).ready(function() {
        setInterval( function() {
        var hours = new Date().getHours();
        $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);
        setInterval( function() {
        var minutes = new Date().getMinutes();
        $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        setInterval( function() {
        var seconds = new Date().getSeconds();
        $(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        });


document.getElementById("myBtn").onclick = function() {dropDownFunction()};

function dropDownFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("#input").on("input", function countChar() {
        $("#count").text(this.value.length);
});

    function compareNumbers()
    {
        'use strict'
        var liczba1;
        var liczba2;
        var napis="";
        liczba1 = parseInt(document.getElementById("liczba1").value);
        liczba2 = parseInt(document.getElementById("liczba2").value);

        if (liczba1>=liczba2)
        {
            $("#odp").text("Liczba 1 jest większa");
        }
        else if (liczba1<liczba2)
        {
                $("#odp").text("Liczba 2 jest większa")
        }
        else
        {
            document.getElementById("odp").innerHTML = "Podaj poprawne liczby!"
        }
}


function showImg() {
        var img = document.createElement("img");

        img.src = "superhero-spiderman-comics-512.png";
        var src = document.getElementById("x");

        src.appendChild(img);
}

function spinImg() {
        var img = document.getElementById("x");
        img.setAttribute("class", "rotated-image");
      }

function hideFooter() {
        var display = document.getElementById("ftr").style.display;
        
    if(display=="none"){
        document.getElementById("ftr").style.display="block";
        }
    else{
        document.getElementById("ftr").style.display="none";
    }
    var x = document.getElementById("hide-btn");

        if (x.innerHTML === "Pokaż footer") {
                x.innerHTML = "Ukryj footer";
              } else {
                x.innerHTML = "Pokaż footer";
              }
}



function likeDislike(x) {
        x.classList.toggle("fa-thumbs-down");
      }

