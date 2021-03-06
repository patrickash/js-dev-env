export default function getBaseUrl() {
  // const IS_DEVELOPMENT = window.location.hostname === "localhost";
  // return IS_DEVELOPMENT ? "http://localhost:3001/" : "/";
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://desolate-beach-26061.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;

  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  var results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
