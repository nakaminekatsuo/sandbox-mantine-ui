import { Box, Divider, Group, Space, Title } from "@mantine/core";
import type { Route } from "./+types/_route";
import { ProgressCard } from "./ProgressCard";
import { Await } from "react-router";
import { Suspense } from "react";
import { ToggleThemeButton } from "~/design-system/ToggleThemeButton";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {
  const message =  new Promise<string>((resolve) => setTimeout(() => resolve("Hello from the client loader!"), 1000));
  return {
    message,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <Box>
      <Group justify="flex-end" mt="md" mr="md">
        <ToggleThemeButton />
      </Group>
      <Divider my="md" />
     <Title order={1}>
      <Suspense fallback={"loading..."}>
        <Await resolve={loaderData.message}>
          {(message) => message}
        </Await>
      </Suspense>
    </Title>
    <Box style={{
      padding: "1rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem",
    }}>
      {Array.from({length: 10}).map((_, index) => (
        <ProgressCard key={index} />
      ))}
    </Box>
    </Box>
  )
}
