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