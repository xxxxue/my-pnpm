#!/usr/bin/env node
//pnpm i -D

import { getArgs, execCmd } from "./utils/index.js";

function main() {
    
    let args = getArgs();

    if (args.length == 3) {
        throw new Error("请传入包名...");
    }

    let cmdArr = ["pnpm", "i", "-D", ...getArgs()];

    execCmd(cmdArr)
}

try {
    main()
} catch (error) {
    console.error(error);
}

