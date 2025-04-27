import { Title } from "@mantine/core";
import type { Route } from "./+types/_route";
import { ProgressCard } from "./PRogressCard";
import { Await } from "react-router";
import { Suspense } from "react";
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
    <>
    <Title order={1}>
      <Suspense fallback={"loading..."}>
        <Await resolve={loaderData.message}>
          {(message) => message}
        </Await>
      </Suspense>
    </Title>
    <div style={{
      padding: "1rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem",
    }}>
      {Array.from({length: 10}).map((_, index) => (
        <ProgressCard key={index} />
      ))}
    </div>
    </>
  )
}
