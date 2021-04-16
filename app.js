function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let az = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < az.length; i++) {

                // créer des li

                var newLi = document.createElement("li");

                var btnInfos = document.createElement('button');

                var span = document.createElement("span");

                span.id="infos";

                btnInfos.textContent = "Plus d'infos";

                span.appendChild(btnInfos);

                var etdnt = az[i];

                var t2 = document.createTextNode(etdnt.name);

                newLi.appendChild(t2);

                var list = document.getElementById("list");

                list.appendChild(newLi);

                list.appendChild(span);
            }
        }
    };
    xhttp.open("GET", "https://60792028e7f4f50017185390.mockapi.io/api/v1/employees", true);
    xhttp.send();
}

var infos = document.getElementById("infos");

infos.addEventListener("click", getInfos);

function getInfos() {
    
}
