import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/images", // Folder gambar dalam src
          dest: "assets", // Folder tujuan dalam build
        },
        {
          src: "src/assets/video",
          dest: "assets"
        }
      ],
    }),
  ],
});
