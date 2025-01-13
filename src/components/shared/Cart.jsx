import React from "react";

const Cart = ({ addedProducts, total, vat, handleCreateQuotation }) => {
    const netPayable = total + (total * vat) / 100;

    return (
        <div className="w-full border p-3 shadow-md rounded-md">
            <div className="flex justify-between">
                <p>Total:</p>
                <p className="text-end">{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
                <p>VAT ({vat}%):</p>
                <p className="text-end">{((total * vat) / 100).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
                <p>Net Payable:</p>
                <p className="text-end">{netPayable.toFixed(2)}</p>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleCreateQuotation}>
                Create Quotation
            </button>
        </div>
    );
};

export default Cart;
