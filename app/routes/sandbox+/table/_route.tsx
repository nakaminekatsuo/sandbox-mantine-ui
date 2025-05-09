import { Box, Table } from "@mantine/core";
import { TableVirtuoso } from "react-virtuoso";
import type { Route } from "./+types/_route";
export async function clientLoader() {
	return {
		users: [
			{
				id: 1,
				name: "John Doe",
				age: 32,
				email: "john@example.com",
				role: "管理者",
				department: "営業部",
				joinDate: "2020-01-01",
			},
			{
				id: 2,
				name: "Jane Doe",
				age: 28,
				email: "jane@example.com",
				role: "一般社員",
				department: "開発部",
				joinDate: "2021-03-15",
			},
			{
				id: 3,
				name: "山田太郎",
				age: 45,
				email: "yamada@example.com",
				role: "部長",
				department: "人事部",
				joinDate: "2015-04-01",
			},
			{
				id: 4,
				name: "佐藤花子",
				age: 29,
				email: "sato@example.com",
				role: "一般社員",
				department: "経理部",
				joinDate: "2019-09-01",
			},
			{
				id: 5,
				name: "田中実",
				age: 38,
				email: "tanaka@example.com",
				role: "課長",
				department: "営業部",
				joinDate: "2017-06-15",
			},
			{
				id: 6,
				name: "鈴木一郎",
				age: 33,
				email: "suzuki@example.com",
				role: "一般社員",
				department: "開発部",
				joinDate: "2018-12-01",
			},
			{
				id: 7,
				name: "高橋めぐみ",
				age: 27,
				email: "takahashi@example.com",
				role: "一般社員",
				department: "マーケティング部",
				joinDate: "2022-01-10",
			},
			{
				id: 8,
				name: "渡辺健一",
				age: 41,
				email: "watanabe@example.com",
				role: "課長",
				department: "総務部",
				joinDate: "2016-08-22",
			},
			{
				id: 9,
				name: "伊藤さくら",
				age: 31,
				email: "ito@example.com",
				role: "一般社員",
				department: "営業部",
				joinDate: "2019-03-01",
			},
			{
				id: 10,
				name: "小林誠",
				age: 36,
				email: "kobayashi@example.com",
				role: "係長",
				department: "開発部",
				joinDate: "2018-05-15",
			},
			{
				id: 11,
				name: "中村梨花",
				age: 25,
				email: "nakamura@example.com",
				role: "一般社員",
				department: "人事部",
				joinDate: "2023-04-01",
			},
			{
				id: 12,
				name: "加藤優",
				age: 39,
				email: "kato@example.com",
				role: "課長",
				department: "経理部",
				joinDate: "2017-11-30",
			},
		],
	};
}

export default function Page({ loaderData }: Route.ComponentProps) {
	const virtualTable = (
		<TableVirtuoso
			style={{ height: "200px", overflowX: "auto" }}
			data={loaderData.users}
			components={{
				Table: Table,
				TableHead: Table.Thead,
				TableBody: Table.Tbody,
				TableRow: Table.Tr,
			}}
			fixedHeaderContent={() => (
				<Table.Tr bg="var(--mantine-color-body)">
					<Table.Th w={50}>id</Table.Th>
					<Table.Th w={100}>Name</Table.Th>
					<Table.Th w={50}>Age</Table.Th>
					<Table.Th w={200}>Email</Table.Th>
					<Table.Th w={100}>Role</Table.Th>
					<Table.Th w={100}>Department</Table.Th>
					<Table.Th w={100}>Join Date</Table.Th>
				</Table.Tr>
			)}
			itemContent={(_index, user) => (
				<>
					<Table.Td>{user.id}</Table.Td>
					<Table.Td>{user.name}</Table.Td>
					<Table.Td>{user.age}</Table.Td>
					<Table.Td>{user.email}</Table.Td>
					<Table.Td>{user.role}</Table.Td>
					<Table.Td>{user.department}</Table.Td>
					<Table.Td>{user.joinDate}</Table.Td>
				</>
			)}
		/>
	);
	return (
		<Box p="md">
			<p>Table</p>
			{virtualTable}
		</Box>
	);
}
