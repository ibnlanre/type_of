import { terser } from "rollup-plugin-terser";
import typescript from "@wessberg/rollup-plugin-ts";

const banner = `/*!
 * @ibnlanre/typeof-0.0.3
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */`;

export default {
  input: "./index.ts",
  output: {
    file: "index.js",
    banner,
  },
  plugins: [typescript(), terser()],
};
