import { apiInitializer } from "discourse/lib/api";
import loadScript from "discourse/lib/load-script";

export default apiInitializer("1.8.0", (/* api */) => {
  loadCookiePolicy();
});

async function loadCookiePolicy() {
  await loadScript(settings.theme_uploads_local.cookie_policy_js);
  cpNs.cookiePolicy();
}