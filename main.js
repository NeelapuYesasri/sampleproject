/*function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);
})*/
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error("error"));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	basic(data.Career);
})
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src="nature1.jpg";
	img.alt="picture";
	ch.appendChild(img);
	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:ramuneelapu0916@gmail.com";
	email.textContent="ramuneelapu0916@gmail.com";
	ch.appendChild(email);
    var address=document.createElement("p");
    address.textContent=det.address;
    ch.appendChild(address);
    var  ph=document.createElement("h3");
    ph.textContent=det.mobile;
    ch.appendChild(ph);
}
var ch2=document.querySelector(".child2");
function basic(d1){
	var c1=document.createElement("h3");
	c1.textContent="Career Objective:";
	ch2.appendChild(c1);
    var c=document.createElement("h4");
    c.textContent=d1.CO;
    ch2.appendChild(c);
}
function education(edu){
	var table1 =document.createElement("table");
	table1.border="1";
	ch1.appendChild(table1);
	tabledata="";
	for(i=0;i<edu[i].length;i++){
		tabledata+="<tr><td>"+edu[i].Institute+"</td><td>"+edu[i].Degree+"</td><td>"+edu[i].Percentage+"</td><td>"+edu[i]Passout+"</td><td>";
	}
	table1.innerHTML=tabledata;
}
