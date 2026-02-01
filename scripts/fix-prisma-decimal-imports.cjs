const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "prisma", "generated");
const FROM = "@prisma/client/runtime/library";
const TO = "@prisma/client-runtime-utils";

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.isFile() && p.endsWith(".ts")) patchFile(p);
  }
}

function patchFile(file) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes(FROM)) return;
  const out = src.replaceAll(FROM, TO);
  fs.writeFileSync(file, out);
  console.log("patched:", path.relative(process.cwd(), file));
}

if (fs.existsSync(root)) walk(root);
else console.log("skip: no prisma/generated");