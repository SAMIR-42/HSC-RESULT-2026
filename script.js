const btn = document.getElementById("resultBtn");
const roll = document.getElementById("roll");
const mother = document.getElementById("mother");
const loader = document.getElementById("loader");

btn.addEventListener("click", () => {

    if(roll.value.trim() === "" || mother.value.trim() === ""){
      alert("Please fill all details");
      return;
    }
  
    // 🔥 user interaction mil gaya → sound unlock trick
    sessionStorage.setItem("soundAllowed", "true");
  
    loader.classList.add("active");
  
    setTimeout(() => {
      window.location.href = "hsc-vid.html";
    }, 2000);
  });