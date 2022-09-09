import { execa } from "execa";
import { join } from "node:path";
import { homedir } from "node:os";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

export async function execCmd(cmd: string[]) {
  const [file, ...args] = cmd;

  console.log("------------");
  console.log("Command: ", cmd.join(" "));
  console.log("------------");

  // stdio: 'inherit' — 子进程输出实时逐行打印到终端
  // cleanup: true  — 父进程退出时（如 Ctrl+C）自动终止子进程
  await execa(file, args, {
    stdio: "inherit",
    cleanup: true,
  });
}

export function getArgs() {
  return process.argv.slice(2);
}

export function getRequireArgs() {
  let args = getArgs();
  if (args.length == 0) {
    throw new Error("args is null !");
  }
  return args;
}

export function run(main: () => Promise<void>) {
  main().catch((error) => {
    // 用户 Ctrl+C 终止时，子进程被信号杀掉，不需要打印错误
    if (error?.isTerminated) return;
    // 子进程失败时，inherit 已实时打印过原始输出，这里只补一行摘要
    if (error?.exitCode !== undefined) {
      console.error(`\n✘ Command failed with exit code ${error.exitCode}`);
      process.exit(error.exitCode);
    }
    // 其他异常（如命令不存在）才打印完整错误
    console.error(error);
    process.exit(1);
  });
}

const configFileName = ".my-pnpm-config";
const configPath = join(homedir(), configFileName);

export function getBinName() {
  if (existsSync(configPath)) {
    let data = readFileSync(configPath, { encoding: "utf-8" }).trim();
    return data;
  }
  // 默认 pnpm
  return "pnpm";
}

export function saveBinName(name: string = "pnpm") {
  writeFileSync(configPath, name.trim(), { encoding: "utf-8" });
}

export function showHelp() {
  console.log(`
## help
  n -h

## switch bin
  n -use nub
  n -use pnpm

## n = pnpm

eg:

n
  pnpm install

n i react
  pnpm i react

n -h
  pnpm -h

and more

## short commands

nd eslint typescript
  pnpm i -D eslint typescript

nt lodash-es node
  pnpm i -D @types/lodash-es @types/node

nx tsc -v
  pnpm exec tsc -v

nr dev
  pnpm run dev
`);
}
