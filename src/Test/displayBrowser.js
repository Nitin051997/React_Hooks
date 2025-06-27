import chrome from "../assets/Timeline/chrome.svg";
import safari from "../assets/Timeline/safari.svg";
import firefox from "../assets/Timeline/mozilla_firefox.svg";
import edge from "../assets/Timeline/microsoft_edge.svg";
import explorer from "../assets/Timeline/explorer.svg";
import default_browser from "../assets/Timeline/default browser.svg";

export const displayBrowser = (browser) => {
    try {
      if (browser === "Google Chrome") return chrome;
      else if (browser === "Apple Safari") return safari;
      else if (browser === "Mozilla Firefox") return firefox;
      else if (browser === "Microsoft Edge (Chromium)") return edge;
      else if (browser === "Internet Explorer") return explorer;
      else return default_browser;
    } catch (error) {
      return default_browser;
    }
  };

export const displayBrowserName = (browser) => {
    try {
      if (browser === "Google Chrome") return "chrome";
      else if (browser === "Apple Safari") return "safari";
      else if (browser === "Mozilla Firefox") return "mozilla_firefox";
      else if (browser === "Microsoft Edge (Chromium)") return "microsoft_edge";
      else if (browser === "Internet Explorer") return "explorer";
      else return "default browser";
    } catch (error) {
      return "default browser";
    }
  };