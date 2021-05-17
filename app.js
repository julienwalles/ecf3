function loadDoc() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let fichierJson = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < fichierJson.length; i++) {

                // création de la card et affichage du nom prénom de chaque employé

                var card = document.createElement("div");
                card.className = "card col-3 ";
                card.id = "card";


                var cardBody = document.createElement("div");
                cardBody.className = "card-body";
                cardBody.id = "cardBody";


                var employeeImg = document.createElement("IMG");
                employeeImg.setAttribute("src", "img.png");
                employeeImg.className = "card-img-top";


                var cardTitle = document.createElement("h5");
                cardTitle.className = "card-title";
                cardTitle.textContent = "Employee";


                var cardIdentity = document.createElement("p");
                cardIdentity.className = "employeeIdentity";


                var emp = fichierJson[i];

                var emp_name = document.createTextNode(emp.name);

                cardIdentity.appendChild(emp_name);


                var btnInfos = document.createElement("button");
                btnInfos.className = "employeeInfos";
                btnInfos.textContent = "Plus d'infos";
                btnInfos.setAttribute("data-bs-toggle", "modal");
                btnInfos.setAttribute("data-bs-target", "#exampleModal");
                btnInfos.setAttribute("onclick", "getMoreInfos (" + emp.id + ")");


                var listEmployees = document.getElementById("employees");


                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardIdentity);
                cardBody.appendChild(btnInfos);

                card.appendChild(employeeImg);
                card.appendChild(cardBody);

                listEmployees.appendChild(card);

            }

        }
    };
    xhttp.open("GET", "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees", true);
    xhttp.send();
}


//affichage de la modale + infos ( phone, city )
var modal = document.getElementById("exampleModal");

var btn = document.getElementById("")

function getMoreInfos(ID) {

    var modalBody = document.getElementById("modalInfo");
    var modalTitle = document.getElementById("exampleModalLabel");

    // modal.classList.add("show");
    modal.style.display = "block";

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let fichierJson = JSON.parse(this.responseText);

            var infos = document.createTextNode ("PHONE:" + " " + fichierJson.phone +  "\n" + "CITY:" + " " + fichierJson.city);
            var employeeName = document.createTextNode ( fichierJson.name);

            modalTitle.appendChild (employeeName);

            modalBody.appendChild (infos);

        }
    };

    var url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
    xhttp.open("GET", url + ID , true);
    xhttp.send();
}
