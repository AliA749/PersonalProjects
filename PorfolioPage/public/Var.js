window.addEventListener("load", addlistener);
window.addEventListener("load",start);

function addlistener() {
    document.getElementById("switch").addEventListener("change", pagechange);
    document.getElementById("switch2").addEventListener("change", pagechange);
    document.getElementById("projectbtn").addEventListener("click",github);
    document.getElementById("twitterbtn").addEventListener("click",x);
    document.getElementById("aboutbtn").addEventListener("click",aboutme);
    document.getElementById("Contactbtn").addEventListener("click",Mycontacts);
    document.getElementById("Startbtn").addEventListener("click",front);
}
function start()
{
	document.getElementById("awakeimg").style.display="block";
	document.getElementById("sleepingimg").style.display="none";
	document.getElementById("aboutme").style.display="none";
	document.getElementById("contacts").style.display="none";
}
function pagechange() {
    var switch1 = document.getElementById("switch");
    var switch2 = document.getElementById("switch2");

    if (switch1.checked) {
		document.getElementById("contacts").style.color="black";
		document.getElementById("Insta").style.color="black";
		document.getElementById("Twitter").style.color="black";
		document.getElementById("aboutme").style.color="black";
       document.body.style.backgroundColor="ghostwhite";
       document.getElementById("frontpageinfo").style.color="black";
       document.getElementById("projectbtn").style.backgroundColor="ghostwhite";
       document.getElementById("projectbtn").style.color="black";
       document.getElementById("twitterbtn").style.backgroundColor="ghostwhite";
       document.getElementById("twitterbtn").style.color="black";
        document.getElementById("aboutbtn").style.backgroundColor="ghostwhite";
        document.getElementById("aboutbtn").style.color="black";
        document.getElementById("Contactbtn").style.backgroundColor="ghostwhite";
        document.getElementById("Contactbtn").style.color="black";
        document.getElementById("Startbtn").style.backgroundColor="ghostwhite";
        document.getElementById("Startbtn").style.color="black";
       document.getElementById("switchtb").style.color="black";
       document.getElementById("awakeimg").style.display="block";
	   document.getElementById("sleepingimg").style.display="none";
        // Perform actions when switch 1 is ON
    } else if (switch2.checked) {
		document.getElementById("contacts").style.color="white";
		document.getElementById("Insta").style.color="white";
		document.getElementById("Twitter").style.color="white";
		document.getElementById("aboutme").style.color="white";
		document.body.style.backgroundColor="#120024";
        document.getElementById("frontpageinfo").style.color="white";
        document.getElementById("projectbtn").style.backgroundColor="120024";
        document.getElementById("projectbtn").style.color="white";
        document.getElementById("twitterbtn").style.backgroundColor="120024";
        document.getElementById("twitterbtn").style.color="white";
        document.getElementById("aboutbtn").style.backgroundColor="120024";
        document.getElementById("aboutbtn").style.color="white";
        document.getElementById("Contactbtn").style.backgroundColor="120024";
        document.getElementById("Contactbtn").style.color="white";
        document.getElementById("Startbtn").style.backgroundColor="120024";
        document.getElementById("Startbtn").style.color="white";
        document.getElementById("switchtb").style.color="white";
        document.getElementById("sleepingimg").style.mixBlendMode="normal";
        document.getElementById("awakeimg").style.display="none";
	    document.getElementById("sleepingimg").style.display="block";
        // Perform actions when switch 2 is ON
    }
}

function github()
{
	document.getElementById("projectbtn").onclick= window.location.assign("https://github.com/AliA749");
}

function x()
{
	document.getElementById("twitterbtn").onclick= window.location.assign("https://twitter.com/simplydisrrupt");
}

function aboutme()
{
	document.getElementById("frontpageinfo").style.display="none";
	document.getElementById("aboutme").style.display="block";
	document.getElementById("contacts").style.display="none";
}

function Mycontacts()
{
	document.getElementById("contacts").style.display="block";
	document.getElementById("frontpageinfo").style.display="none";
	document.getElementById("aboutme").style.display="none";
}

function front()
{
	document.getElementById("frontpageinfo").style.display="block";
	document.getElementById("aboutme").style.display="none";
	document.getElementById("contacts").style.display="none";
}
