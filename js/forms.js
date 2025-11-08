const form = document.querySelector("#webform");

//summary
const summary_description = document.querySelector("#summary-description-text");
const summary_size = document.querySelector("#summary-size-text");
const summary_location = document.querySelector("#summary-location-text");
const summary_help = document.querySelector("#summary-help-text");

function cancelPopup(event) {
  event.preventDefault(); // Vis ikke browser-popup
  form.querySelector(":user-invalid").focus(); // Fokus på første :user-invalid-felt */
}

// Lav en funktion, der stopper refresh og nulstiller formularen
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form)

  // Hent værdier fra form
  const description = formData.get("alien description");
  const size = formData.get("alien size");
  const location = formData.get("alien location");
  const help = formData.getAll("help[]");

  let help_lists = '';
  for (let i = 0; i < help.length; i++) {
    help_lists += '<li>' + help[i] + '</li>';
  }

  // Sæt værdier ind i output-elementer
  summary_description.textContent = description;
  summary_size.textContent = size;
  summary_location.textContent = location;
  summary_help.innerHTML = help_lists;

  
  form.reset();
}

form.addEventListener('invalid', cancelPopup, true);
// Lyt efter fejl (invalid) i felterne inde i formen.
// true = form holder øje med fejl direkte i felterne

// Lyt efter submit-event og kør funktion
form.addEventListener('submit', handleSubmit);