function read() {
    var xml = new XMLHttpRequest();
    xml.open('GET','test.xml',false);
    xml.send();
    var xmlData = xml.responseXML;
    if (!xmlData) {
        xmlData = (new DOMParser()).parseFromString(xml.responseText,'test/xml')
        var emp = xmlData.getElementsByTagName("employee");
        var name = emp[0].getElementsByClassName("name")[0].firstChild;
        var age = emp[0].getElementsByClassName("age")[0].firstChild;
       
        document.write("Name="+name+"<br>")
        document.write("Age="+age+"<br>")
        console.log(name)
        console.log(age)
    }
}