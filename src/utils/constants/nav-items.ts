export const headerHeight = 151;

export const navItems = [
  { label: "Home", sectionId: "home-section" },
  { label: "Que hay para ti", sectionId: "info-section" },
  { label: "Suscríbete y ayuda", sectionId: "subscribe-section" },
  { label: "Nuestra motivación", sectionId: "mission-section" },
  { label: "Contacto", sectionId: "footer-section" },
];

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - headerHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
