function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let az = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < az.length; i++) {

                //afficher le nom prénom de chaque employé

                var card = document.createElement("div");

                card.className = "card style=width: 18rem";

                card.id = "card";

                var cardBody = document.createElement("div");

                cardBody.className = "card-body";

                cardBody.id = "cardBody";

                var employeeImg = document.createElement("img");

                employeeImg.src = "./img";

                var cardTitle = document.createElement("h5");

                cardTitle.className = "card-title";

                var cardIdentity = document.createElement("p");

                cardIdentity.id = "employeeIdentity";

                var btnInfos =  document.createElement("button");

                btnInfos.id = "employeeInfos";

                btnInfos.textContent = "Plus d'infos";

                var employeeCard = document.getElementById("card");

                var listEmployees = document.getElementById("employees");

                employeeCard.appendChild(cardBody);
                employeeCard.appendChild(employeeImg);
                employeeCard.appendChild(cardTitle);
                employeeCard.appendChild(cardIdentity);
                employeeCard.appendChild(btnInfos);

                listEmployees.appendChild(employeeCard);
                



            }     

            
        }
    };
    xhttp.open("GET", "https://60792028e7f4f50017185390.mockapi.io/api/v1/employees", true);
    xhttp.send();
}