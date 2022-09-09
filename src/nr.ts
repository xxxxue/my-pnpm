import { execCmd, run, getBinName, getRequireArgs } from "./utils";

async function main() {
  let args = getRequireArgs();

  let binName = getBinName();

  let cmdArr = [binName, "run", ...args];

  await execCmd(cmdArr);
}

run(main);
