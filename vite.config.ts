import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { SEO_PAGE_LIST, buildSeoHeadInner } from "./src/lib/seo";

function seoStaticPagesPlugin(): Plugin {
  return {
    name: "seo-static-pages",
    apply: "build",
    closeBundle() {
      const dist = join(process.cwd(), "dist");
      const indexPath = join(dist, "index.html");
      if (!existsSync(indexPath)) return;

      const html = readFileSync(indexPath, "utf8");
      if (!html.includes("<!--seo-head-->")) return;

      for (const page of SEO_PAGE_LIST) {
        const next = html.replace(
          /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/,
          `<!--seo-head-->\n    ${buildSeoHeadInner(page)}\n    <!--/seo-head-->`,
        );

        if (page.path === "/") {
          writeFileSync(indexPath, next);
          continue;
        }

        const dir = join(dist, page.path.replace(/^\//, ""));
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), next);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), seoStaticPagesPlugin()],
});
