function UI() {
  this.ad = document.getElementById("ad");
  this.soyad = document.getElementById("soyad");
  this.email = document.getElementById("email");
  this.form = document.querySelector(".form-rehber");
  this.clientlist = document.querySelector(".tbody");
  this.success = document.querySelector(".bilgi--success");
  this.error = document.querySelector(".bilgi--error");
}

UI.prototype.addClient = function (name, surname, email) {
  textAd = ui.ad.value;
  textSoyad = ui.soyad.value;
  textEmail = ui.email.value;

  if(textAd == "" || textSoyad == "" || textEmail == ""){
    alert()
  }

  html = `
                     <tr>
                        <td>${textAd}</td>
                        <td>${textSoyad}</td>
                        <td>${textEmail}</td>
                        <td>
                            <i class="btn btn--edit fa-solid fa-pen-to-square"></i>
                            <i class="btn btn--delete fa-solid fa-trash"></i>
                        </td>
                    </tr>
      `;

      ui.clientlist.innerHTML += html;
};

UI.prototype.clearInputs = function(){
    ui.ad.value = "";
    ui.soyad.value = "";
    ui.email.value = "";
}