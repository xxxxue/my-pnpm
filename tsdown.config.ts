import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/n.ts", "src/nd.ts", "src/nt.ts", "src/nx.ts", "src/nr.ts"],
  dts: false,
  exports: false,
  clean: true,
  shims: true,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
