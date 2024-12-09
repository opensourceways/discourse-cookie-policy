import { apiInitializer } from "discourse/lib/api";
import loadScript from "discourse/lib/load-script";

export default apiInitializer("1.8.0", (/* api */) => {
  loadCookiePolicy();
});

async function loadCookiePolicy() {
  await loadScript(settings.theme_uploads_local.cookie_policy_js);
  cpNs.cookiePolicy();
  // Components are loaded after DOMContentLoaded event, so we need to dispatch it manually. We should replace this with a custom event in the future.
  document.dispatchEvent(new Event("DOMContentLoaded", {
    bubbles: true,
    cancelable: true
  }));
}