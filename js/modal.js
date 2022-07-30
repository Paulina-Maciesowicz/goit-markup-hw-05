<html>
  <head> </head>
  <body>
    <button data-modal-open>Zamów usługę</button>
    <button data-modal-close type="button">X</button>
    <div class="backdrop is-hidden" data-modal>modal</div>
  </body>
 
    <!-- 
    w inspektorze wklejamy w zakładce console/konsola 
    document.querySelector("[data-modal-open]")
    i jeśli pojawi się button to jest ok

    document.querySelector("[data-modal-open]").getAttribute('data-modal-open')
    --></html>

 /*
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
*/