function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "employee.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =
        `<tr>
            <th>Id</th><th>Họ và tên</th><th>Tuổi</th>
            <th>Phòng</th>
        </tr>`;
    var x = xmlDoc.getElementsByTagName("people");

    // Start to fetch the data by using TagName
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("id")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("name")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("age")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("room")[0]
                .childNodes[0].nodeValue + "</td></tr>";
    }

    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}