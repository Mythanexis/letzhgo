import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Let'ZHgo Fahrschule Zürich",
    short_name: "Let'ZHgo",
    description:
      "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0144DC",
    lang: "de-CH",
    dir: "ltr",
    orientation: "portrait",
    categories: ["education", "business"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
