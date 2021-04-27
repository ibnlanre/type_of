/**
 * Retrieves the type of a JS value
 * @param {any} value the value to check its type
 */
export default function typeOf(value: any): string {
  if (typeof value !== "object") return typeof value;
  return !value ? String(value) : value.constructor.name.toLowerCase();
}
