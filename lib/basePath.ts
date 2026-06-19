export const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/International-Vanishing-Twin-Syndrome-Foundation"
    : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
