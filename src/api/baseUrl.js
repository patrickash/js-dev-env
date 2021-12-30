export default function getBaseUrl() {
  const IS_DEVELOPMENT = window.location.hostname === "localhost";
  return IS_DEVELOPMENT ? "http://localhost:3001/" : "/";
}
