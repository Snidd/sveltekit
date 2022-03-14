import { get, writable } from 'svelte/store';
export const startingStore = writable<string>();

// in-source test suites
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	it('testName', () => {
		expect(get(startingStore)).toBe(undefined);
	});
}
