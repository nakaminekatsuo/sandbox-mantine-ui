import { Box, Flex, Title } from "@mantine/core";
import { Suspense } from "react";
import { Await } from "react-router";
import type { Route } from "./+types/_route";
import { ProgressCard } from "./ProgressCard";
export function meta(_: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function clientLoader(_: Route.ClientLoaderArgs) {
	const message = new Promise<string>((resolve) =>
		setTimeout(() => resolve("Hello from the client loader!"), 1000),
	);
	return {
		message,
	};
}

export default function Page({ loaderData }: Route.ComponentProps) {
	return (
		<Flex direction="column" gap="md" p="md">
			<Title order={1}>
				<Suspense fallback={"loading..."}>
					<Await resolve={loaderData.message}>{(message) => message}</Await>
				</Suspense>
			</Title>
			<Box
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
					gap: "1rem",
				}}
			>
				{Array.from({ length: 10 })
					.map((_, index) => ({ id: index }))
					.map((item) => (
						<ProgressCard key={item.id} />
					))}
			</Box>
		</Flex>
	);
}
