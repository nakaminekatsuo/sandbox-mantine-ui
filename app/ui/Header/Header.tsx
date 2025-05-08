import { Anchor, Button, Divider, Group } from "@mantine/core";
import { NavLink, href, useFetcher } from "react-router";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

export function Header() {
	const fetcher = useFetcher();
	const submitting = fetcher.state === "submitting";
	return (
		<header>
			<Group justify="flex-end" mt="md" mr="md" ml="md">
				<Group flex={"1"}>
					<Anchor component={NavLink} to={href("/")}>
						Home
					</Anchor>
					<Divider orientation="vertical" />
					<Anchor component={NavLink} to={href("/sandbox/table")}>
						Table
					</Anchor>
				</Group>
				<fetcher.Form method="post" action={href("/resource/test")}>
					<Button type="submit" loading={submitting}>
						{fetcher.data?.message ?? "Test"}
					</Button>
				</fetcher.Form>
				<ToggleThemeButton />
			</Group>
			<Divider my="md" />
		</header>
	);
}
