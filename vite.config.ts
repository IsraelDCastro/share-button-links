import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json",
      entryRoot: "src/components",
      include: ["src/components/**/*"],
      exclude: ["src/**/*.spec.ts", "src/**/*.test.ts"]
    }),
    viteStaticCopy({
      targets: [
        { src: "src/assets/share-button-links.scss", dest: "" },
        { src: "src/assets/scss", dest: "" }
      ]
    })
  ],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    lib: {
      entry: "./src/components/index.ts",
      formats: ["es", "umd"],
      name: "share-button-links",
      fileName: (format) => `share-button-links.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "share-button-links.css";
          return assetInfo.name || "asset.[ext]";
        },
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  server: {
    open: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets")
    }
  }
});
