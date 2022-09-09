#!/usr/bin/env node
console.log("nt");

import { getArgs, execCmd } from "./utils/index.js";

function main() {

    let args = getArgs()

    if (args.length == 0) {
        throw new Error("parameters is null !");
    }

    for (let i = 0; i < args.length; i++) {
        args[i] = "@types/" + args[i]
    }

    let cmdArr = ["pnpm", "i", "-D", ...args];

    execCmd(cmdArr)
}

try {
    main()
} catch (error) {
    console.error(error);
}