import {
  getArgs,
  execCmd,
  run,
  getBinName,
  saveBinName,
  showHelp,
} from "./utils";

async function main() {
  let args = getArgs();

  if (args[0] == "-use" && args[1] != undefined) {
    saveBinName(args[1]);
    return;
  } else if (args[0] == "-h" && args[1] == undefined) {
    showHelp(); //不 return，继续执行 pnpm -h
  } else if (args.length == 0) {
    // NOTE: pnpm/nub 空参数，默认执行的是 -h
    // 只有 n 则转为  n install
    args.push("install");
  }

  let binName = getBinName();

  let cmdArr = [binName, ...args];

  await execCmd(cmdArr);
}

run(main);
