let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let fichierJson = JSON.parse(this.responseText); //convertir stringJSON en objet

        for (i = 0; i < fichierJson.length; i++) {

            let emp = fichierJson[i];

            // création de la card et affichage du nom prénom de chaque employé

            let card = document.createElement("div");
            card.className = "card col-3 ";
            card.id = "card";


            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            cardBody.id = "cardBody";


            let employeeImg = document.createElement("IMG");
            employeeImg.setAttribute("src", "img.png");
            employeeImg.className = "card-img-top";


            let cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = "Employee" + " " + emp.id;


            let cardIdentity = document.createElement("p");
            cardIdentity.className = "employeeIdentity";




            let emp_name = document.createTextNode("Identity:" + " " + emp.name + " " + emp.last_name);

            cardIdentity.appendChild(emp_name);


            let btnInfos = document.createElement("button");
            btnInfos.className = "employeeInfo btn btn-primary";
            btnInfos.textContent = "More infos";
            btnInfos.setAttribute("data-bs-toggle", "modal");
            btnInfos.setAttribute("data-bs-target", "#exampleModal");
            btnInfos.setAttribute("onclick", "getMoreInfos (" + emp.id + ")");

            let btnDel = document.createElement("button");
            btnDel.className = "buttonDelete btn btn-danger";
            btnDel.textContent = "Delete";
            btnDel.setAttribute("data-bs-toggle", "modal");
            btnDel.setAttribute("data-bs-target", "#deleteModal");
            btnDel.setAttribute("onclick", "delEmployee (" + emp.id + ")");


            let listEmployees = document.getElementById("employees");


            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardIdentity);
            cardBody.appendChild(btnInfos);
            cardBody.appendChild(btnDel);


            card.appendChild(employeeImg);
            card.appendChild(cardBody);

            listEmployees.appendChild(card);

        }

    }

};

xhttp.open("GET", "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees", true);
xhttp.send();



//affichage de la modale + infos ( phone, city )
let modal = document.getElementById("exampleModal");

function getMoreInfos(ID) {

    let modalBody = document.getElementById("modalInfo");
    let modalTitle = document.getElementById("exampleModalLabel");

    modalTitle.innerText = " ";
    modalBody.innerText = " ";


    modal.style.display = "block";

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let fichierJson = JSON.parse(this.responseText);



            let infos = document.createTextNode("JOB:" + " " + fichierJson.job_title + " " + "EMAIL:" + " " + fichierJson.email);

            let employeeName = document.createTextNode(fichierJson.name + " " + fichierJson.last_name);


            modalTitle.appendChild(employeeName);

            modalBody.appendChild(infos);

        }
    };

    let url = " https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
    xhttp.open("GET", url + ID, true);
    xhttp.send();
}


let deleteModal = document.getElementById("deleteModal");
let btnYesDel = document.getElementById("btnYesDel");

function delEmployee(ID) {

    deleteModal.style.display = "block";

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            // let fichierJson = JSON.parse(this.responseText);

            btnYesDel.onclick = function () {

                location.reload();

            }

        }

    };

    let url = " https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
    xhttp.open("DELETE", url + ID, true);
    xhttp.send();
}

function submit() {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) { 
              
              }
        };


    let url = " https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(json));

}