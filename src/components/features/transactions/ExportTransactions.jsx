import React from 'react';
import { CSVLink } from 'react-csv';
import { FiDownload, FiPrinter, FiFileText } from 'react-icons/fi';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExportTransactions = ({ transactions }) => {
  // Prepare CSV data
  const csvData = transactions.map(tx => ({
    ID: tx.id,
    Name: tx.recipient.name,
    Amount: `$${tx.amount.toLocaleString()}`,
    Status: tx.status,
    Date: new Date(tx.transactionDate).toLocaleDateString(),
    Fee: `$${tx.fee || 0}`,
    Category: tx.category,
  }));

  // Function to export PDF
  const exportPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('Transactions Report', 14, 10);

    // Prepare table data
    const tableData = transactions.map(tx => [
      tx.id,
      tx.recipient?.name || 'N/A',
      `$${tx.amount.toLocaleString()}`,
      tx.status,
      new Date(tx.transactionDate).toLocaleDateString(),
      `$${tx.fee || 0}`,
      tx.category || 'N/A',
    ]);

    // Add table
    doc.autoTable({
      head: [['ID', 'Name', 'Amount', 'Status', 'Date', 'Fee', 'Category']],
      body: tableData,
      startY: 20,
    });

    // Save the PDF
    doc.save('transactions.pdf');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 print:hidden">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Export Transactions</h3>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* CSV Export */}
        <CSVLink
          data={csvData}
          filename={"transactions.csv"}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
        >
          <FiDownload className="text-lg" />
          <span>CSV</span>
        </CSVLink>

        {/* PDF Export */}
        <button
          onClick={exportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
        >
          <FiFileText className="text-lg" />
          <span>PDF</span>
        </button>

        {/* Print */}
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors"
        >
          <FiPrinter className="text-lg" />
          <span>Print</span>
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Total transactions: {transactions.length}</p>
        <p>Export includes all filtered transactions</p>
      </div>
    </div>
  );
};

export default ExportTransactions;