type ANY = string | number;

export type TYPE = 'as' | 'set' | 'off' | 'on' | 'xor' | 'toggle';
export type STATE = 'active' | 'press' | '';

export function className<T extends ANY>(type: TYPE, as: T[], value: T[], isPress?: boolean): STATE;
export function className<T extends ANY>(type: TYPE, as: T, value: T, isPress?: boolean): STATE;
export function className<T extends ANY>(type: TYPE, as: any, value: any, isPress = false): STATE {
	if (chkActive<T>(type, as, value)) return 'active';
	if (isPress) return 'press';
	return '';
}

export function chkActive<T extends ANY>(type: TYPE, as: T[], value: T[]): boolean;
export function chkActive<T extends ANY>(type: TYPE, as: T, value: T): boolean;
export function chkActive(type: TYPE, as: any, value: any): boolean {
	if ('as' === type) {
		return value === as;
	}
	if (as instanceof Array && value instanceof Array) {
		return as.every((item) => value.includes(item));
	}
	if ('string' === typeof as && 'string' === typeof value) {
		return value.includes(as);
	}
	if ('number' === typeof as && 'number' === typeof value) {
		return (value & as) === as;
	}
	return false;
}

export function tap<T extends ANY>(type: TYPE, as: T[], value: T[]): T[];
export function tap<T extends ANY>(type: TYPE, as: T, value: T): T;
export function tap(type: TYPE, as: any, value: any) {
	if ('toggle' === type) {
		const is_active = chkActive(type, as, value);
		return is_active ? tap('off', as, value) : tap('on', as, value);
	}

	if (as instanceof Array && value instanceof Array) {
		switch (type) {
			case 'as':
			case 'set':
				return as;
			case 'off':
				return value.filter((item) => !as.includes(item));
			case 'on':
				return [...value, ...as.filter((item) => !value.includes(item))];
			case 'xor':
				return [
					...value.filter((item) => !as.includes(item)),
					...as.filter((item) => !value.includes(item))
				];
		}
	}

	if ('string' === typeof as && 'string' === typeof value) {
		switch (type) {
			case 'as':
			case 'set':
				return as;
			case 'off':
				return value.replace(new RegExp(as, 'g'), '');
			case 'on':
				return value.includes(as) ? value : `${value}${as}`;
			case 'xor':
				throw new Error('not implement.');
		}
	}
	if ('number' === typeof as && 'number' === typeof value) {
		switch (type) {
			case 'as':
			case 'set':
				return as;
			case 'off':
				return value & ~as;
			case 'on':
				return value | as;
			case 'xor':
				return value ^ as;
		}
	}
}
