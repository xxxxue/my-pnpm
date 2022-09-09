#!/usr/bin/env node

import { getArgs, execCmd } from "./utils/index.js";

function main() {

    let args = getArgs();

    if (args.length == 0) {
        args.push("install")
    }
    
    let cmdArr = ["pnpm", ...args];

    execCmd(cmdArr)
}

try {
    main()
} catch (error) {
    console.error(error);
}

