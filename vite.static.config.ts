/**
 * Vite config for static export (Cloudflare Pages / GitHub Pages)
 * Run: pnpm build:static
 * Output: dist-static/
 */
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist-static"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          router: ["wouter"],
        },
      },
    },
  },
  define: {
    // Stub out tRPC for static build - forms will fall back to WhatsApp
    "process.env.VITE_STATIC_BUILD": JSON.stringify("true"),
  },
});
