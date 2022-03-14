import { startingStore } from '$lib/stores';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

beforeEach(() => {
	startingStore.set(undefined);
});
