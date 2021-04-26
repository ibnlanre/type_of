export default function typeOf(value: any) {
  if (typeof value !== "object") return typeof value;
  return !value ? String(value) : value.constructor.name.toLowerCase();
}
