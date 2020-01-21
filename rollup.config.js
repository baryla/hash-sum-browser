import { terser } from "rollup-plugin-terser";

const outputOptions = {
  name: "hashSum",
  format: "iife"
};

export default {
  input: "src/index.js",
  output: [
    {
      ...outputOptions,
      file: "dist/index.js"
    },
    {
      ...outputOptions,
      file: "dist/index.min.js",
      plugins: [terser()]
    }
  ]
};
