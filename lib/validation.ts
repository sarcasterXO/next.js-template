import * as z from 'zod';

export interface ValidationSuccess<T> {
	ok: true;
	data: T;
}

export interface ValidationFailure {
	ok: false;
	formErrors: string[];
	fieldErrors: {
		[key: string]: string[] | undefined;
	};
}

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

export function parseInput<T>(schema: z.ZodType<T>, value: unknown): ValidationResult<T> {
	const parsed = schema.safeParse(value);
	if (parsed.success) return { ok: true, data: parsed.data };

	const flat = z.flattenError(parsed.error);
	return { ok: false, formErrors: flat.formErrors, fieldErrors: flat.fieldErrors };
}

export async function parseJson<T>(request: Request, schema: z.ZodType<T>): Promise<ValidationResult<T>> {
	try {
		return parseInput(schema, await request.json());
	} catch {
		return { ok: false, formErrors: ['Expected a JSON body'], fieldErrors: {} };
	}
}
