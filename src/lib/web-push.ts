import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:isma.tux3er@gmail.com",
  import.meta.env.PUBLIC_KEY,
  import.meta.env.PRIVATE_KEY
);

export default webpush;
