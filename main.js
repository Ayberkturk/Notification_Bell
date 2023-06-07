const closeIcon = document.getElementById("close");
const notificationIcon = document.getElementById("notification");
const card = document.getElementById("card");

notificationIcon.addEventListener("click", function () {
    card.style.display = "block";
    notificationIcon.style.display = "none";
    closeIcon.style.display = "block";
  });
  
  closeIcon.addEventListener("click", function () {
    card.style.display = "none";
    notificationIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
  localStorage.setItem('LCW Cookie','Discount');
