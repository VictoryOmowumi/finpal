import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { transactions } from '@/utils/dummydata'
import { getStatusClasses, formatCurrency } from '@/utils/format';
const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'currency', headerName: 'Currency', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1,
    renderCell: (params) => {
        const status = params.row.status;
        return (
            <div >
               <span className={`px-2 py-1 rounded-full text-xs ${getStatusClasses(status)}`}>
                     {status}
               </span>
               
            </div>
        );
    }
     },
    { field: 'transactionType', headerName: 'Transaction Type', flex: 1 },
    {
        field: 'recipient',
        headerName: 'Recipient',
        flex: 1,
        renderCell: (params) => {
            const recipient = params.row.recipient;
            return (
                <div>
                    <p className='capitalize'>{recipient.name} - {recipient.accountNumber}</p>
                    
                </div>
            );
        }
    },
    { field: 'paymentMethod', headerName: 'Payment Method', flex: 1 },
    { field: 'transactionDate', headerName: 'Transaction Date', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    {
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        renderCell: (params) => {
            const actions = params.row.actions;
            return (
                <div>
                    {actions.dispute && <button>Dispute</button>}
                    {actions.shareReceipt && <button>Share Receipt</button>}
                    {actions.transferAgain && <button>Transfer Again</button>}
                    {actions.viewRecords && <button>View Records</button>}
                </div>
            );
        }
    }
];

const TransactionList = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={10}
                getRowId={(row) => row.id} 
                disableSelectionOnClick
            />
        </div>
    )
}

export default TransactionList