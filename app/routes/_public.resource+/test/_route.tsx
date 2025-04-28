import type { Route } from "./+types/_route";

export async function clientAction(_: Route.ClientActionArgs) {
	console.log("called action");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		message: "Hello from the action!!!!",
	};
}

export async function clientLoader(_: Route.ClientLoaderArgs) {
	console.log("called loader");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		message: "Hello from the loader!!!!",
	};
}
