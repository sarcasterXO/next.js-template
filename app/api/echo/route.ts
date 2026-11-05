import * as z from 'zod';

import { parseInput, parseJson } from '@/lib/validation';

const requestSchema = z.object({
	message: z.string().min(1),
});

const responseSchema = z.object({
	message: z.string(),
});

export async function POST(request: Request) {
	const requestParsed = await parseJson(request, requestSchema);
	if (!requestParsed.ok) return Response.json(requestParsed, { status: 400 });

	const responseParsed = parseInput(responseSchema, { message: requestParsed.data.message });
	if (!responseParsed.ok) return Response.json(responseParsed, { status: 500 });

	return Response.json(responseParsed.data);
}
