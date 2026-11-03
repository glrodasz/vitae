/**
 * Webpack/Turbopack loader for content/*.yml (registered in next.config.js):
 * parses and validates the file, then exposes it as the module's default export.
 */
const { parseContent } = require("./content-schema");

module.exports = function yamlLoader(source) {
  const data = parseContent(source, this.resourcePath);
  return `export default ${JSON.stringify(data)};`;
};
