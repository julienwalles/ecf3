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

                span.id = "infos";

                btnInfos.textContent = "Plus d'infos";

                span.appendChild(btnInfos);

                var etdnt = az[i];

                var t2 = document.createTextNode(etdnt.name);

                newLi.appendChild(t2);

                var list = document.getElementById("list");

                list.appendChild(newLi);

                list.appendChild(span);


                btnInfos.addEventListener("show.bs.modal", moreInfos);

                function moreInfos() {
                    for (i = 0; i < az.length; i++) {
                        var modal = document.createElement("div");
                        modal.className = "modal-dialog modal-dialog-centered";
                        // modal.textContent = "plus d'infos";
                        var etdnt = az[i];
                        var infos = document.createTextNode(etdnt.city + " " + etdnt.phone);
                        modal.appendChild(infos);
                    }
                }

            }
        }
    };
    xhttp.open("GET", "https://60792028e7f4f50017185390.mockapi.io/api/v1/employees", true);
    xhttp.send();
}



// var infos = document.getElementById("infos");

// infos.addEventListener("click", getInfos);

// function getInfos() {

// }

// btnInfos.addEventListener("click", moreInfos);

// function moreInfos() {
//     var modal = document.createElement("div");
//     modal.className="modal-dialog modal-dialog-centered"
//     modal.textContent = "plusd'infos";
//     var moreInfos = az[i];
//     var infos = document.createTextNode(moreInfos.id + " " + moreInfos.city + " " + moreInfos.phone);
//     modal.appendChild(infos);
// }