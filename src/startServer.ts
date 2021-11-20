import { spawn } from "child_process";

export function tsserver() {
  return new Promise((resolve, reject) => {
    const tss = spawn("node", [
      "/Users/adam/.emacs.d/.cache/lsp/npm/typescript-language-server/bin/typescript-language-server",
      "--log-level",
      "4",
      "--tsserver-log-file",
      "ts-logs.txt",
      "--stdio",
    ]);

    tss.stdout.on("data", (buf) => {
      console.log(buf.toString());
    });

    tss.stdout.on("end", (code: number) => {
      console.log("finished code", code);
      resolve(null);
    });

    tss.stderr.on("data", (buf) => {
      console.error(buf.toString());
      reject();
    });
  });
}
