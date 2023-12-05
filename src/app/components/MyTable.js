import { TableRow, Table } from '@radix-ui/themes'

export default function MyTable({ columns, records }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell>{record[column.key]}</Table.Cell>
              ),
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
