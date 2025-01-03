import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/users": {
        target:
          "http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users",
        changeOrigin: true,
        secure: false,
      }
    },
  },
});
