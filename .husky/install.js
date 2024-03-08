if (process.env.NODE_ENV === "production" || process.env.CI === "true") {
  process.exit(0);
}

(() => {
  const { execSync } = require("child_process");
  execSync("husky");
})();
