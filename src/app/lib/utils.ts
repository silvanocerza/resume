import path from "path";
import toml from "toml";
import fs from "fs";

export const config = toml.parse(
  fs.readFileSync(path.join(process.cwd(), "resume.config.toml"), "utf-8"),
);
