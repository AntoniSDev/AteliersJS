const buttonCopy = document.getElementById("button-copy");

buttonCopy.addEventListener("click", function () {
  // Récupérer le textarea source
  const copyText = document.getElementById("copy-text");

  // Copier et coller le texte dans le presse-papiers
  navigator.clipboard.writeText(copyText.value);

  // TOASTR
  toastr["success"]("text copied !", "wow");

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-center",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
});
