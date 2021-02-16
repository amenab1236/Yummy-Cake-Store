//toggle navbar
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

//jquery- dropdown cake selection image
$(document).ready(function () {
  $("#myselection").on("change", function () {
    var demovalue = $(this).val();
    $("div.cakeDiv").hide();
    $("#show" + demovalue).show();
  });
});
