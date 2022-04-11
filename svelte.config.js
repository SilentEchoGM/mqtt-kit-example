import adapter from "@sveltejs/adapter-auto";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          mqtt: "mqtt/dist/mqtt.min.js",
        },
      },
    },
  },
};

export default config;
