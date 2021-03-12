import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";
import LogRocket from "logrocket";

if (process.env.NODE_ENV !== "development") {
  LogRocket.init("znnvni/amr-elsekillys-blog");
}

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: "#000",
    secondary: "#73737D",
    accent: "#6166DC",
    grey: "#555555",
    background: "#fff",
  },
};
