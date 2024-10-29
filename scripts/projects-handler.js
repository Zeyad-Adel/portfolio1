var projectsDive = document.getElementById("projects");

for(let i=0; i<PROJECTS.length; i++)
{
    //div
    var currentProject=PROJECTS[i];
    var projectdiv=document.createElement("div");
    var divStyle=document.createAttribute("style");
    divStyle.value="display:inline-block; width:300px; margin:10px;";
    projectdiv.setAttributeNode(divStyle)

    //h3
    var title=document.createElement("h3");
    var titlenode=document.createTextNode(currentProject.title);
    title.appendChild(titlenode)

    //img
    var image = document.createElement("img");
    var source = document.createAttribute("src");
    source.value="./images/projects/" + currentProject.img
    image.setAttributeNode(source);
    var imgstyle = document.createAttribute("style");
    imgstyle.value="width:180px; height: 100px";
    image.setAttributeNode(imgstyle);

    //p
    var p =document.createElement("p");
    var pNode = document.createTextNode(currentProject.description);
    p.appendChild(pNode);

    projectdiv.appendChild(title);
    projectdiv.appendChild(image);
    projectdiv.appendChild(p);
    
    projectsDive.appendChild(projectdiv);
}