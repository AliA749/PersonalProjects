window.addEventListener("load",addlisteners);

function addlisteners()
{
	document.getElementById("BTNview").addEventListener("click",ViewInfo);
	document.getElementById("GobackBTN").addEventListener("click",gobackpage);
}

function ViewInfo()
{
	var StudentFname = getFromLocalStorage("Student_Firstname");
    var StudentLname = getFromLocalStorage("Student_Lastname");
    var StudentGradeLVL = getFromLocalStorage("Student_GradeLevel");
    var StudentTimecame = getFromLocalStorage("Student_TimeCame");
    document.getElementById("studentfnameLBL").innerHTML+= StudentFname;
    document.getElementById("studentlnameLBL").innerHTML+=StudentLname;
    document.getElementById("studentgradeLBL").innerHTML+=StudentGradeLVL;
    document.getElementById("timecameLBL").innerHTML+=StudentTimecame;
    
}
function gobackpage()
{
	document.getElementById("GobackBTN").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/AttendanceProj/public/index.html");
}