// Get all the modal elements
var modals = document.querySelectorAll(".modal");

// Get the portfolio items
var portfolioItems = document.querySelectorAll(".portfolio-list a");

// Loop through the portfolio items and add click event listeners
for (var i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    // Get the modal that corresponds to the clicked portfolio item
    var modalId = this.getAttribute("data-modal");
    var modal = document.querySelector("#" + modalId);

    // Show the modal
    modal.style.display = "block";
  });
}

// Loop through the modals and add click event listeners to close button
for (var i = 0; i < modals.length; i++) {
  var closeButton = modals[i].querySelector(".close");
  closeButton.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
  });
}

// Add event listener to the window to close modals when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
});
