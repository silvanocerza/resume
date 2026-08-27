const toml = require("toml");

module.exports = function tomlLoader(source) {
  return `export default ${JSON.stringify(toml.parse(source))};`;
};
