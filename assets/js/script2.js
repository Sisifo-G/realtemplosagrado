popupWhatsApp = () => {
  let btnClosePopup = document.querySelector(".closePopup");
  let btnOpenPopup = document.querySelector(".whatsapp-button");
  let popup = document.querySelector(".popup-whatsapp");
  let sendBtn = document.getElementById("send-btn");

  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle("is-active-whatsapp-popup");
  });

  btnOpenPopup.addEventListener("click", () => {
    console.log('Hola Mundo');
    popup.classList.toggle("is-active-whatsapp-popup");
    popup.style.animation = "fadeIn .6s 0.0s both";
  });

  // const LinkWhastapp = () => {
  //   let msg = document.getElementById("whats-in").value;
  //   let relmsg = msg.replace(/ /g, "%20");

  //     window.open("https://wa.me/526323188867?text=" + relmsg, "_blank");
  // };

  // msg.addEventListener("keypress", event => {
  //   if (event.keyCode === 13) {
  //     LinkWhastapp();
  //   }
  // });

  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById("whats-in").value;
    let relmsg = msg.replace(/ /g, "%20");

    window.open("https://wa.me/526323188867?text=" + relmsg, "_blank");
  });

  setTimeout(() => {
    popup.classList.toggle("is-active-whatsapp-popup");
  }, 3000);
};

popupWhatsApp();
