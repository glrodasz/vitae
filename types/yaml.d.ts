/** content/*.yml files are parsed and validated at build time by scripts/yaml-loader.js. */
declare module "*.yml" {
  const content: unknown;
  export default content;
}
