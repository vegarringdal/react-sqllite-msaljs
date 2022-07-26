/**
 * Helper for returning number or 0
 */

export function toNumber(x: string | null | undefined, defaultValue: number): number {
    const number = parseInt(x as any);
    if (isNaN(number)) {
        return defaultValue;
    } else {
        return number;
    }
}
