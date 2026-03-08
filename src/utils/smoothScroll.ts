const NAV_OFFSET = 72;

export function smoothScrollToId(id: string, offset = NAV_OFFSET) {
  const element = document.getElementById(id);
  if (!element) return;

  smoothScrollToElement(element, offset);
}

export function smoothScrollToElement(
  element: Element | null,
  offset = NAV_OFFSET
) {
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}
