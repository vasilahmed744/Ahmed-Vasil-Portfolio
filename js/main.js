/* Portfolio behaviour only. Editable content belongs in portfolio-data.js. */
(() => {
  const data = window.PORTFOLIO_DATA;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  const isUrl = (value) => /^https:\/\/.+/i.test(value || "");
  const isAsset = (value) => /^(assets\/)[a-zA-Z0-9_./-]+$/.test(value || "") && !value.includes("..");
  const externalLink = (url, label, className = "text-link") => isUrl(url) ? `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>` : "";
  const assetLink = (path, label, className = "text-link") => isAsset(path) ? `<a class="${className}" href="${escapeHtml(path)}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>` : "";
  const anyLink = (value, label, className = "text-link") => externalLink(value, label, className) || assetLink(value, label, className);
  const tags = (items = []) => items.length ? `<ul class="tags">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  const setText = (selector, value) => { const target = $(selector); if (target && value) target.textContent = value; };
  const setSection = (id, enabled, hasContent = true) => { const section = $(`#${id}`); if (section) section.hidden = !enabled || !hasContent; };

  function renderNavigation() {
    const links = $("#primary-menu");
    links.innerHTML = data.navigation.map((item) => `<a${item.cta ? ' class="nav-cta"' : ""} href="${escapeHtml(item.target)}">${escapeHtml(item.label)}${item.cta ? ' <span aria-hidden="true">↗</span>' : ""}</a>`).join("");
  }

  function renderIdentity() {
    $$(".brand-name").forEach((item) => { item.textContent = data.site.name.toUpperCase(); });
    $$(".brand-mark").forEach((item) => { item.textContent = data.site.initials; });
    setText("#hero-eyebrow", data.hero.eyebrow);
    setText("#hero-title-lead", data.hero.titleLead);
    setText("#hero-title-accent", data.hero.titleAccent);
    setText("#hero-title-end", data.hero.titleEnd);
    setText("#hero-summary", data.hero.summary);
    setText("#hero-role", data.person.primaryTitle);
    $("#hero-focus").innerHTML = data.person.focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    $("#hero-primary").textContent = data.hero.primaryAction.label;
    $("#hero-primary").href = data.hero.primaryAction.target;
    $("#hero-secondary").textContent = data.hero.secondaryAction.label;
    $("#hero-secondary").href = data.hero.secondaryAction.target;
    setText("#availability-label", data.availability.label);
    setText("#availability-detail", data.availability.detail);
    setText("#year", new Date().getFullYear());
  }

  function renderProfile() {
    const container = $("#profile-visual");
    const image = data.profileImage;
    container.innerHTML = `<div class="profile-fallback" aria-label="${escapeHtml(image.alt)}">${escapeHtml(image.fallbackInitials || data.site.initials)}</div>`;
    if (!isAsset(image.src)) return;
    const photo = document.createElement("img");
    photo.src = image.src;
    photo.alt = image.alt || data.person.name;
    photo.className = "profile-photo";
    photo.style.objectPosition = image.position || "center center";
    photo.addEventListener("load", () => container.classList.add("has-photo"));
    photo.addEventListener("error", () => photo.remove());
    container.prepend(photo);
  }

  function renderAbout() {
    setText("#about-eyebrow", data.about.eyebrow);
    setText("#about-title", data.about.title);
    setText("#about-lead", data.about.lead);
    $("#about-paragraphs").innerHTML = data.about.paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
    $("#principles-list").innerHTML = data.about.principles.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(item)}</li>`).join("");
  }

  function projectActions(project) {
    return [
      externalLink(project.github, "GitHub", "card-link"),
      externalLink(project.liveDemo, "Live demo", "card-link"),
      externalLink(project.documentation, "Documentation", "card-link"),
      externalLink(project.writeup, "Write-up", "card-link")
    ].filter(Boolean).join("");
  }

  function projectMedia(project) {
    const screenshots = (project.screenshots || []).filter(isAsset);
    if (!isAsset(project.image) && !screenshots.length) return "";
    const cover = isAsset(project.image) ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)} project preview" loading="lazy" />` : "";
    const gallery = screenshots.length ? `<div class="project-screenshots">${screenshots.map((image, index) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(project.name)} screenshot ${index + 1}" loading="lazy" />`).join("")}</div>` : "";
    return `<div class="project-media">${cover}${gallery}</div>`;
  }

  function renderProjects(filter = "all") {
    const selected = (filter === "all" ? data.projects : data.projects.filter((project) => project.category === filter)).filter((project) => project.visibility !== "hidden");
    $("#project-grid").innerHTML = selected.map((project) => `
      <article class="project-card">
        <div class="card-top"><p>${escapeHtml(project.categoryLabel)}</p><span class="status">${escapeHtml(project.status)}</span></div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.shortDescription)}</p>
        <p class="project-detail">${escapeHtml(project.fullDescription)}</p>
        ${projectMedia(project)}
        ${tags(project.technologies)}
        <div class="card-bottom"><span class="project-year">${escapeHtml(project.date)}</span><div class="card-actions">${projectActions(project)}</div></div>
      </article>`).join("") || `<p class="empty-state">Projects will appear here as they are ready to share publicly.</p>`;
    $$("img", $("#project-grid")).forEach((image) => image.addEventListener("error", () => image.closest(".project-media")?.remove()));
  }

  function renderProjectFilters() {
    const categories = [...new Map(data.projects.filter((project) => project.visibility !== "hidden").map((project) => [project.category, project.categoryLabel])).entries()];
    const filters = [{ key: "all", label: "All work" }, ...categories.map(([key, label]) => ({ key, label }))];
    $("#project-filters").innerHTML = filters.map((item, index) => `<button class="filter${index === 0 ? " is-active" : ""}" data-filter="${escapeHtml(item.key)}" type="button">${escapeHtml(item.label)}</button>`).join("");
    $$(".filter").forEach((button) => button.addEventListener("click", () => {
      $(".filter.is-active")?.classList.remove("is-active");
      button.classList.add("is-active");
      renderProjects(button.dataset.filter);
    }));
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = Object.entries(data.skills).map(([title, items]) => `
      <article class="tool-group reveal-card"><h3>${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`).join("");
  }

  function renderLabs() {
    $("#labs-grid").innerHTML = data.labs.map((lab, index) => `
      <article class="note-card reveal-card"><span>${String(index + 1).padStart(2, "0")}</span><p class="note-type">${escapeHtml(lab.platform)}</p><h3>${escapeHtml(lab.title)}</h3><p>${escapeHtml(lab.detail)}</p></article>`).join("");
    const platformLinks = Object.values(data.platforms).filter((platform) => platform.enabled && isUrl(platform.profileUrl));
    $("#platform-links").innerHTML = platformLinks.map((platform) => externalLink(platform.profileUrl, platform.label, "platform-link")).join("");
    $("#platform-links").hidden = platformLinks.length === 0;
  }

  function renderJourney() {
    const education = $("#education-list");
    education.innerHTML = data.education.map((item) => `<article><span>${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.degree)}</h3><p>${escapeHtml(item.institution)} · ${escapeHtml(item.status)}${item.cgpa ? `<span class="minor-detail"> · CGPA ${escapeHtml(item.cgpa)}</span>` : ""}</p></div></article>`).join("");
    const training = $("#training-list");
    training.innerHTML = data.training.map((item) => `<article><span>${escapeHtml(item.status)}</span><div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.institution)}</p>${tags(item.areas)}</div></article>`).join("");
    const experience = $("#experience-list");
    experience.innerHTML = data.experience.map((item) => `<article><span>${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.role)} · ${escapeHtml(item.organization)}</h3><p><strong>${escapeHtml(item.project)}.</strong> ${escapeHtml(item.description)}</p></div></article>`).join("");
    $("#education-block").hidden = !data.settings.sections.education || data.education.length === 0;
    $("#training-block").hidden = !data.settings.sections.training || data.training.length === 0;
    $("#experience-block").hidden = !data.settings.sections.experience || data.experience.length === 0;
  }

  function renderCertifications() {
    $("#certification-grid").innerHTML = data.certifications.map((item) => `
      <article class="certification-card reveal-card"><p class="note-type">${escapeHtml(item.issuer)}</p><h3>${escapeHtml(item.name)}</h3><p>Issued ${escapeHtml(item.issued)}${item.credentialId ? ` · ID ${escapeHtml(item.credentialId)}` : ""}</p><div class="card-actions">${externalLink(item.verificationUrl, "Verify", "card-link")}${anyLink(item.certificateImage || item.certificatePdf, "View certificate", "card-link")}</div></article>`).join("");
  }

  function renderWriteups() {
    const container = $("#writeups-grid");
    if (!data.writeups.length) { container.innerHTML = `<p class="empty-state">Technical writeups coming soon.</p>`; return; }
    container.innerHTML = data.writeups.map((item, index) => `<article class="note-card reveal-card"><span>${String(index + 1).padStart(2, "0")}</span><p class="note-type">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p>${tags(item.tags)}${externalLink(item.url, "Read write-up", "card-link")}</article>`).join("");
  }

  function renderAchievements() {
    const section = $("#achievements");
    if (!data.achievements.length) { section.hidden = true; return; }
    $("#achievements-grid").innerHTML = data.achievements.map((item) => `<article class="note-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></article>`).join("");
  }

  function renderContact() {
    setText("#contact-title", "Let’s have a security-minded conversation.");
    setText("#contact-copy", data.availability.detail);
    const publicEmail = data.contact.professionalEmail || data.contact.email;
    const emailAction = $("#email-action");
    emailAction.hidden = !publicEmail;
    if (publicEmail) { emailAction.href = `mailto:${publicEmail}`; emailAction.textContent = "Email Ahmed"; }
    const resumeAction = $("#resume-action");
    const hasResume = data.resume.enabled && isAsset(data.resume.file);
    resumeAction.hidden = !hasResume;
    if (hasResume) { resumeAction.href = data.resume.file; resumeAction.textContent = data.resume.label; resumeAction.setAttribute("download", ""); }
    const socialLinks = Object.values(data.social).filter((item) => isUrl(item.url));
    $("#social-links").innerHTML = socialLinks.map((item) => externalLink(item.url, item.label, "social-link")).join("");
    const location = $("#contact-location");
    location.hidden = !data.contact.location;
    location.textContent = data.contact.location;
  }

  function applyVisibility() {
    const sections = data.settings.sections;
    setSection("about", sections.about);
    setSection("projects", sections.projects, data.projects.some((project) => project.visibility !== "hidden"));
    setSection("skills", sections.skills, Object.keys(data.skills).length > 0);
    setSection("labs", sections.labs, data.labs.length > 0);
    setSection("journey", sections.journey, data.education.length + data.training.length + data.experience.length > 0);
    setSection("certifications", sections.certifications, data.certifications.length > 0);
    setSection("writeups", sections.writeups);
    setSection("contact", sections.contact);
  }

  function syncRuntimeSeo() {
    document.title = data.seo.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = data.seo.description;
  }

  function initMenu() {
    const button = $(".menu-toggle"); const links = $(".nav-links");
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open)); links.classList.toggle("is-open", !open);
    });
    links.addEventListener("click", () => { button.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); });
  }

  function initReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { $$(".reveal, .reveal-card").forEach((item) => item.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    $$(".reveal, .reveal-card").forEach((item) => observer.observe(item));
  }

  renderNavigation(); renderIdentity(); renderProfile(); renderAbout(); renderProjectFilters(); renderProjects(); renderSkills(); renderLabs(); renderJourney(); renderCertifications(); renderWriteups(); renderAchievements(); renderContact(); applyVisibility(); syncRuntimeSeo(); initMenu(); initReveal();
})();
