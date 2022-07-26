/**
 * Helper for returning number or 0
 */

export function toBool(x: string | null | undefined, defaultValue: boolean): boolean {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    if (x.toLowerCase() === "true") {
        return true;
    }
    return false;
}
