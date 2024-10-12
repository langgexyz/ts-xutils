

export function RandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function UniqFlag(): string {
	return RandomInt(0x10000000, Number.MAX_SAFE_INTEGER).toString(16)
}
