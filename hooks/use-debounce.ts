import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDEbouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDEbouncedValue(value);
		}, delay || 500);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}
