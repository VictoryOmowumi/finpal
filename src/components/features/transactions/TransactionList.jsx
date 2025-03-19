import React from 'react'
import { transactions } from '@/utils/dummydata'
import {useReactTable} from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'



// {
//     "id": "408b792dcabf4be793e1f7513049c7",
//     "amount": 7256.2,
//     "currency": "NGN",
//     "status": "Pending",
//     "transactionType": "Transfer to GTBank Account",
//     "recipient": {
//         "name": "JOHN DOE",
//         "accountNumber": "4390277244",
//         "bank": "GTBank"
//     },
//     "paymentMethod": "OWealth",
//     "transactionDate": "2025-03-09 11:31:18",
//     "category": "Airtime & Data",
//     "actions": {
//         "dispute": false,
//         "shareReceipt": true,
//         "transferAgain": true,
//         "viewRecords": true
//     }
// },

const columns = [
    {
        Header: 'Amount',
        accessor: 'amount'
    },
    {
        Header: 'Currency',
        accessor: 'currency'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Transaction Type',
        accessor: 'transactionType'
    },
    {
        Header: 'Recipient',
        accessor: 'recipient'
    },
    {
        Header: 'Payment Method',
        accessor: 'paymentMethod'
    },
    {
        Header: 'Transaction Date',
        accessor: 'transactionDate'
    },
    {
        Header: 'Category',
        accessor: 'category'
    },
    {
        Header: 'Actions',
        accessor: 'actions'
    }

]

const TransactionList = () => {
    const data = React.useMemo(() => transactions, []);
    const columns = React.useMemo(() => columns, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useReactTable({
        columns,
        data
    })

  return (
    <div>
        <Table {...getTableProps()}>
            <TableHead>
            {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <TableHeader {...column.getHeaderProps()}>
                    {column.render('Header')}
                    </TableHeader>
                ))}
                </TableRow>
            ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                        </TableCell>
                    )
                    })}
                </TableRow>
                )
            })}
            </TableBody>
        </Table>
    </div>
  )
}

export default TransactionList