const adminName = localStorage.getItem("currentUser") || "Admin";
const adminAge = localStorage.getItem("userAge_" + adminName) || "—";
const adminAddress = localStorage.getItem("userAddress_" + adminName) || "—";
const adminDOB = localStorage.getItem("userDOB_" + adminName) || "—";

document.getElementById("adminName").textContent = adminName;
document.getElementById("adminAge").textContent = adminAge;
document.getElementById("adminAddress").textContent = adminAddress;
document.getElementById("adminDOB").textContent = adminDOB;


if(!localStorage.getItem("currentUser")) {
    alert("Please login first!");
    window.location.href = "loger.html";
}