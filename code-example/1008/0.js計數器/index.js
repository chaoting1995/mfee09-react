document.getElementById("add").addEventListener("click", function () {
  document.getElementById("total").innerHTML =
    +document.getElementById("total").innerHTML + 1;
});


document.getElementById("minus").addEventListener("click", function () {
    document.getElementById("total").innerHTML =
      +document.getElementById("total").innerHTML - 1;
  });