/**
 * Helper for returning array, splitter is comma
 */

export function toArray(x: string | null | undefined, defaultValue: string[]): string[] {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x.split(",");
}
