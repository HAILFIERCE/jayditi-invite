const weddingDate = new Date("2027-01-24T19:00:00+05:30");
const countNodes = Object.fromEntries([...document.querySelectorAll("[data-count]")].map(node => [node.dataset.count, node]));
function updateCountdown() {
  const distance = Math.max(0, weddingDate - new Date());
  const parts = { days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 };
  Object.entries(parts).forEach(([key, value]) => countNodes[key].textContent = String(value).padStart(key === "days" ? 3 : 2, "0"));
}
updateCountdown(); setInterval(updateCountdown, 1000);

const toggle = document.querySelector(".menu-toggle"); const nav = document.querySelector("#site-nav");
toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const form = document.querySelector("#rsvp-form"); const status = form.querySelector(".form-status");
form.addEventListener("submit", event => { event.preventDefault(); status.textContent = "Thank you — your RSVP has been received."; form.reset(); });

document.querySelector(".sound-button").addEventListener("click", event => { const active = event.currentTarget.getAttribute("aria-pressed") === "true"; event.currentTarget.setAttribute("aria-pressed", String(!active)); event.currentTarget.textContent = active ? "♫" : "♪"; });
