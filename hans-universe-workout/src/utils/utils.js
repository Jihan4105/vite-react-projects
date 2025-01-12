export function getElement(selector) {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error (`Please check "${selector}," selector no such element exist`);
}

export function sidebarToggle() {
  const sideBar = getElement(".sidebar-overlay")

  if(sideBar.classList.contains("show")) {
    sideBar.classList.remove("show")
  } else {
    sideBar.classList.add("show")
  }
}