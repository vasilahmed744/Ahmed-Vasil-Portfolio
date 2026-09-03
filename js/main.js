(() => {
  const data = window.PORTFOLIO_DATA;
  const $ = (selector) => document.querySelector(selector);

  function renderProjects(filter = "all") {
    const selected = filter === "all" ? data.projects : data.projects.filter((item) => item.category === filter);
    $("#project-grid").innerHTML = selected.map((item, index) => `
      <article class="project-card" style="--delay:${index * 70}ms">
        <div class="card-top"><p>${item.label}</p><span class="status">${item.status}</span></div>
        <h3>${item.title}</h3><p>${item.description}</p>
        <div class="card-bottom"><ul>${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <a href="${item.link}" aria-label="Read more about ${item.title}">View notes <span aria-hidden="true">↗</span></a></div>
      </article>`).join("");
  }

  function renderCollections() {
    $("#notes-grid").innerHTML = data.notes.map((item) => `
      <article class="note-card reveal-card"><span>${item.number}</span><p class="note-type">${item.type}</p><h3>${item.title}</h3><p>${item.description}</p><a href="#contact">Discuss this <span aria-hidden="true">→</span></a></article>`).join("");
    $("#learning-list").innerHTML = data.learning.map((item) => `
      <article><span>${item.number}</span><div><h3>${item.title}</h3><p>${item.detail}</p></div></article>`).join("");
    $("#toolkit-grid").innerHTML = data.toolkit.map((group) => `
      <article class="tool-group reveal-card"><h3>${group.title}</h3><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("");
    $("#timeline").innerHTML = data.timeline.map((item) => `
      <article><span>${item.period}</span><div><h3>${item.title}</h3><p>${item.detail}</p></div></article>`).join("");
  }

  function setContact() {
    const link = $(".contact-button");
    link.href = `mailto:${data.contact.email}?subject=Portfolio%20enquiry`;
  }

  function initMenu() {
    const button = $(".menu-toggle"); const links = $(".nav-links");
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open)); links.classList.toggle("is-open", !open);
    });
    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { button.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); }));
  }

  function initFilters() {
    document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
      document.querySelector(".filter.is-active").classList.remove("is-active"); button.classList.add("is-active"); renderProjects(button.dataset.filter);
    }));
  }

  function initReveal() {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-card").forEach((item) => observer.observe(item));
  }

  renderProjects(); renderCollections(); setContact(); initMenu(); initFilters(); initReveal();
  $("#year").textContent = new Date().getFullYear();
})();
