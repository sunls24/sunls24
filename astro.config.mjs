import node from "@astrojs/node"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

const output = process.env.OUTPUT || "hybrid"
console.log("OUTPUT:", output)

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: output,
  adapter:
    output === "static"
      ? undefined
      : node({
          mode: "standalone",
        }),
  experimental: {
    serverIslands: output !== "static",
  },
})
