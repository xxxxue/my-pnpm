#!/usr/bin/env node

import { getArgs, execCmd } from "./utils/index.js";

function main() {
    
    let args = getArgs();

    if (args.length == 0) {
        throw new Error("parameters is null !");
    }

    let cmdArr = ["pnpm", "i", "-D", ...getArgs()];

    execCmd(cmdArr)
}

try {
    main()
} catch (error) {
    console.error(error);
}

