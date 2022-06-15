// Media Slideshow
let slideShow = (value) => {
  // Get Slideshow elements
  // const slides = document.getElementsByClassName("slides");
  const slides = document.querySelectorAll(".slides")
  // Set Min & Max Slides
  if (value > slides.length) {
    slideValue = 1;
  }
  
  if (value < 1) {
    slideValue = slides.length;
  }
  // Set display for each slide element to none
  for (let a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  // "Delete" last slide when using carousel
  slides[slideValue-1].style.display = "block";

}

let slideValue = 1;
slideShow(slideValue);

let slideNext = (value) => {
  slideShow(slideValue += value);
}

// Dropdown Menus
document.addEventListener("click", e => {

  const isDropDownButton = e.target.matches(["[data-dropdown-button"])

  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  
  if (isDropDownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

const dropStart = () => {
  document.getElementById("my-dropdown").classList.toggle("show");
}

document.addEventListener("click", e => {
  if (!e.target.matches(".dropdown-button")) {
    const dropdownContent = document.getElementsByClassName("dropdown-content");
      for (i = 0; i < dropdownContent.length; i++) {
        const dropdownValue = dropdownContent[i];

        if (dropdownValue.classList.contains("show")) {
            dropdownValue.classList.remove("show");
        }
      }
  }
})