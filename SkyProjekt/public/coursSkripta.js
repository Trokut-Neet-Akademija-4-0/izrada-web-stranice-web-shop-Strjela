console.log("asdasd");

async function loadHeader() {
  try {
    const response = await fetch("./footer.html");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Get the HTML content
    const html = await response.text();

    // Insert the HTML content into the DOM
    document.getElementById("footer-container").innerHTML = html;
  } catch (err) {
    // Handle errors
    console.error("Error fetching HTML:", err);
  }
}
loadHeader();

const soloInput = document.getElementById("solo");
const tandemInput = document.getElementById("tandem");
const priceHeading = document.getElementById("price");

// Add event listener for solo input
soloInput.addEventListener("click", function () {
  priceHeading.innerHTML = "Price for Solo: $100"; // Update h2 innerHTML
});

// Add event listener for tandem input
tandemInput.addEventListener("click", function () {
  priceHeading.innerHTML = "Price for Tandem: $150"; // Update h2 innerHTML
});

const descButn = document.getElementById("description");
const revBtn = document.getElementById("review");
const descPara = document.getElementById("descPara");
const revPara = document.getElementById("revPara");

descButn.addEventListener("click", function () {
  descPara.classList.remove("hidden");
  descButn.classList.add("border-gray-900");
  descButn.classList.add("text-gray-900");

  revPara.classList.add("hidden");
  revBtn.classList.add("text-gray-600");
  revBtn.classList.remove("border-gray-900");
  revBtn.classList.remove("text-gray-900");
});

revBtn.addEventListener("click", function () {
  revBtn.classList.add("border-gray-900");

  descPara.classList.add("hidden");
  descButn.classList.add("text-gray-600");
  descButn.classList.remove("border-gray-900");
  descButn.classList.remove("text-gray-900");

  revPara.classList.remove("hidden");
  revBtn.classList.remove("text-gray-600");
  revBtn.classList.add("border-gray-900");
  revBtn.classList.add("text-gray-900");
});
