/**
 * Helper for returning string
 */

export function toString(x: string | null | undefined, defaultValue: string): string {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x;
}
