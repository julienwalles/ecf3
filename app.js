function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let az = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < az.length; i++) {

                //afficher le nom prénom de chaque employé

                var card = document.createElement("div");

                card.className = "card-body";

                var btnInfos = document.createElement('button');

                btnInfos.textContent = "Plus d'infos";

                var emp = az[i];

                var t2 = document.createTextNode(emp.name);

                card.appendChild(t2);

                var list = document.getElementById("employees");

                card.appendChild(btnInfos);

                list.appendChild(card);

                // fenêtre modale avec informations

                // var mod = document.createElement("div");

                // card.className = "modal-body";

                // var infos = document.createTextNode(emp.city + " " + emp.phone);

                // mod.appendChild(infos);

                // btnInfos.addEventListener("show.bs.modal", moreInfos);

                // function moreInfos() {
                //     mod.style.display = "block";
                // }
            }
        }
    };
    xhttp.open("GET", "https://60792028e7f4f50017185390.mockapi.io/api/v1/employees", true);
    xhttp.send();
}