import { execCmd, run, getBinName, getRequireArgs } from "./utils";

async function main() {
  let args = getRequireArgs();

  let typesStr = "@types/";

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith(typesStr)) {
      continue;
    }
    args[i] = typesStr + args[i];
  }

  let binName = getBinName();

  let cmdArr = [binName, "i", "-D", ...args];

  await execCmd(cmdArr);
}

run(main);
