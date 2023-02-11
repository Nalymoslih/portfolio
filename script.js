var modals = document.querySelectorAll(".modal");

var portfolioItems = document.querySelectorAll(".portfolio-list a");

for (var i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    var modalId = this.getAttribute("data-modal");
    var modal = document.querySelector("#" + modalId);

    modal.style.display = "block";
  });
}

for (var i = 0; i < modals.length; i++) {
  var closeButton = modals[i].querySelector(".close");
  closeButton.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
  });
}

window.addEventListener("click", function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
});
