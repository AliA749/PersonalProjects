window.addEventListener("load",addListeners);
window.addEventListener("load",initelement);
window.addEventListener("load",initelement2);
window.addEventListener("load",initelement3);
window.addEventListener("load",initelement4);




function addListeners()
{
	document.getElementById("fnameTXT").addEventListener("keypress",element);
	document.getElementById("lnameTXT").addEventListener("keypress",element2);
	document.getElementById("cmbGrade").addEventListener("click",element3);
	document.getElementById("timecamecmb").addEventListener("click",element4);
	document.getElementById("BTNsub").addEventListener("click",continuepage);

	
}

function initelement()
{
	document.getElementById("fnameTXT").focus();
	document.getElementById("lnameTXT").disabled=true;
	document.getElementById("cmbGrade").disabled=true;
	document.getElementById("timecamecmb").disabled=true;
	document.getElementById("BTNsub").disabled=true;
	
}
function initelement2()
{
	document.getElementById("lnameTXT").focus();
	document.getElementById("cmbGrade").disabled=true;
	document.getElementById("timecamecmb").disabled=true;
	document.getElementById("BTNsub").disabled=true;
	
}
function initelement3()
{
	document.getElementById("cmbGrade").focus();
	document.getElementById("timecamecmb").disabled=true;
	document.getElementById("BTNsub").disabled=true;
	
}
function initelement4()
{
	document.getElementById("timecamecmb").focus();
	document.getElementById("BTNsub").disabled=true;	
}

function element(){
	 firstname= document.getElementById("fnameTXT").value;
    if(firstname != " ")
        document.getElementById("lnameTXT").disabled=false;
}
function element2(){
	 lastname= document.getElementById("lnameTXT").value;
    if(lastname != " ")
        document.getElementById("cmbGrade").disabled=false;
}
function element3(){
	 Grade= document.getElementById("cmbGrade").value;
    if(Grade != " ")
        document.getElementById("timecamecmb").disabled=false;
}
function element4(){
	 Timecame= document.getElementById("timecamecmb").value;
    if(Timecame != " ")
        document.getElementById("BTNsub").disabled=false;
}

function continuepage()
{
	var firstname=document.getElementById("fnameTXT").value
	var lastname=document.getElementById("lnameTXT").value
	var GradeLVL=document.getElementById("cmbGrade").value
	var Timecame=document.getElementById("timecamecmb").value
	saveToLocalStorage("Student_Firstname",firstname);
	saveToLocalStorage("Student_Lastname",lastname);
	saveToLocalStorage("Student_GradeLevel",GradeLVL);
	saveToLocalStorage("Student_TimeCame",Timecame);
	document.getElementById("BTNsub").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/AttendanceProj/public/attendance.html");
	
}