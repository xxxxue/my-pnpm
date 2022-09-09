import { execaCommand } from "execa"

export let execCmd = async (cmd: string | string[]) => {

    if (typeof cmd == "object") {
        cmd = cmd.join(" ")
    }
    console.log("------------");
    console.log("Command: ", cmd);
    console.log("------------");

    await execaCommand(cmd, { stdio: 'inherit', encoding: 'utf-8' })
}

export let getArgs = () => {
    return process.argv.slice(2)
}