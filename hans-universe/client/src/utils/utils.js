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

export function queryStringToObject(url) {
  const queryString = url.search.substring(1);

  // UrlqueryString을 Object로 변환 시켜준다.
  return JSON.parse(
    '{"' + queryString.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
}

export function isEllipsisActive(el) {
  return el.offsetHeight < el.scrollHeight;
};

export function initPageScroll(isSidebarToggled = false) {
  window.scrollTo({ top: 0 })
  
  if(isSidebarToggled) {
    sidebarToggle()
  }
}

export function getFormatedDate(date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}