import type { Route } from "./+types/_route";

export async function clientAction(_: Route.ClientActionArgs) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		message: "Hello from the action!!!!",
	};
}

export async function clientLoader(_: Route.ClientLoaderArgs) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		message: "Hello from the loader!!!!",
	};
}
