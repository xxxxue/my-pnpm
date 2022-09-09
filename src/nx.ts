#!/usr/bin/env node

import { getArgs, execCmd } from "./utils/index.js";

function main() {

    let args = getArgs();

    if (args.length == 0) {
        throw new Error("请传入 pnpm exec 的参数.");
    }

    let cmdArr = ["pnpm","exec", ...args];

    execCmd(cmdArr)
}

try {
    main()
} catch (error) {
    console.error(error);
}

