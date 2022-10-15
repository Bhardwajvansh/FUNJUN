// alert("hello")

// navbar
let list = document.getElementById("list");
document.getElementById("nav").addEventListener("click", () => {
  if (list.style.height == "100%") {
    list.style.height = "0";
  } else {
    list.style.height = "100%";
  }
});

// navbar bg change
const changebg = () => {
  if (window.scrollY >= 40) {
    document.getElementById("navbar").style.background = "#d7a85f";
    document.getElementById('header').style.display="none";
} else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById('header').style.display="block";
  }
};

window.addEventListener("scroll", changebg);
