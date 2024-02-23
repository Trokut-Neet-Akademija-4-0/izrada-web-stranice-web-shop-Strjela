async function loadHeader() {
  try {
    const response = await fetch("./header.html");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Get the HTML content
    const html = await response.text();

    // Insert the HTML content into the DOM
    document.getElementById("header-container").innerHTML = html;
  } catch (err) {
    // Handle errors
    console.error("Error fetching HTML:", err);
  }
}
loadHeader();

window.addEventListener("scroll", function () {
  let header = document.getElementById("header");

  if (window.scrollY > 0) {
    header.classList.add("bg-slate-900");

    header.classList.add("scale-105");

    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("bg-slate-900");
    header.classList.add("bg-transparent");

    header.classList.remove("scale-105");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navBtnClosed = document.getElementById("navBtnClosed");
  const iconNav = document.getElementById("iconNav");
  const navItems = document.getElementById("navItems");
  let header = document.getElementById("header");

  let isOpen;
  navBtnClosed.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      navItems.classList.remove("hidden");
      navItems.classList.add("block");

      iconNav.classList.remove("fa-solid");
      iconNav.classList.remove("fa-bars");
      iconNav.classList.add("fa-solid");
      iconNav.classList.add("fa-xmark");
    } else if (!isOpen) {
      navItems.classList.remove("block");
      navItems.classList.add("hidden");

      iconNav.classList.remove("fa-solid");
      iconNav.classList.remove("fa-xmark");
      iconNav.classList.add("fa-solid");
      iconNav.classList.add("fa-bars");
    }
  });
});
