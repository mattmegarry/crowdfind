// Fixes https://github.com/microsoft/TypeScript/issues/30471
// Don't totally understand (I'm not even using typescript so is some config I have wrong?)
// But just pushing past this for now.

declare module "console" {
  export = typeof import("console");
}
