function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let az = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < az.length; i++) {

                //afficher le nom prénom de chaque employé

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

                cardIdentity.id = "employeeIdentity";


                var btnInfos =  document.createElement("button");

                btnInfos.id = "employeeInfos";

                btnInfos.textContent = "Plus d'infos";

                var emp = az[i];

                var bninfos = document.createTextNode(emp.name);


                var listEmployees = document.getElementById("employees");

               
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardIdentity);
                cardBody.appendChild(btnInfos);

                card.appendChild(employeeImg);
                card.appendChild(cardBody);
             
                listEmployees.appendChild(card);


                btnInfos.addEventListener("click", infos);

                function infos() {

                    alert (bninfos);
                }
                
            }     


           

            
        }
    };
    xhttp.open("GET", "https://60792028e7f4f50017185390.mockapi.io/api/v1/employees", true);
    xhttp.send();
}
