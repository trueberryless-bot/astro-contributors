import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";

import markdocGrammar from "./grammars/markdoc.tmLanguage.json";

export default defineConfig({
  site: "https://astro-contributors.netlify.app",
  redirects: {
    "/all-contributors": "/components/all-contributors/",
    "/parameters": "/components/contributor-list/",
  },
  integrations: [
    starlight({
      title: "Astro Contributors",
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/astro-contributors/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      expressiveCode: { shiki: { langs: [markdocGrammar] } },
      sidebar: [
        { slug: "getting-started" },
        {
          label: "Components",
          items: [
            { slug: "components/contributor-list" },
            { slug: "components/all-contributors" },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/astro-contributors",
        },
      ],
      plugins: [
        starlightPluginsDocsComponents({
          pluginName: "astro-contributors",
        }),
      ],
    }),
  ],
});
