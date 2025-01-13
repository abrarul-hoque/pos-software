// import React, { useState } from "react";

// const demoProducts = [
//     { productCode: "P001", productName: "Product 1", total_item: 100, rate: 50, userEmail: "user1@example.com" },
//     { productCode: "P002", productName: "Product 2", total_item: 200, rate: 30, userEmail: "user2@example.com" },
//     { productCode: "P003", productName: "Product 3", total_item: 150, rate: 40, userEmail: "user3@example.com" },
// ];

// const AddProduct = ({ handleAddProduct, addedProducts }) => {
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [quantity, setQuantity] = useState(1);

//     const handleSelectProduct = (event) => {
//         const productCode = event.target.value;
//         const product = demoProducts.find((p) => p.productCode === productCode);
//         setSelectedProduct(product);
//     };

//     const handleAdd = () => {

//         if (selectedProduct && quantity > 0) {
//             const totalItem = selectedProduct.rate * quantity;
//             handleAddProduct({ ...selectedProduct, quantity, totalItem });
//             setSelectedProduct(null);
//             setQuantity(1);
//         }
//     };

//     return (
//         <div className='flex flex-col lg:flex-row gap-2'>
//             <div className='w-full lg:w-4/5 border p-3 pt-5 shadow-md rounded-md'>

//                 <div className="border p-3 shadow-md rounded-md">
//                     <h3 className="font-bold mb-3">Add Product</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
//                         <div>
//                             <label className="label-text">Product</label>
//                             <select
//                                 className="select select-bordered"
//                                 onChange={handleSelectProduct}
//                                 value={selectedProduct?.productCode || ""}
//                             >
//                                 <option value="" disabled>
//                                     Select product
//                                 </option>
//                                 {demoProducts.map((product) => (
//                                     <option key={product.productCode} value={product.productCode}>
//                                         {product.productName}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div>
//                             <label className="label-text">Rate</label>
//                             <input type="number" value={selectedProduct?.rate || ""} className="input input-bordered" readOnly />
//                         </div>
//                         <div>
//                             <label className="label-text">Quantity</label>
//                             <input
//                                 type="number"
//                                 value={quantity}
//                                 onChange={(e) => setQuantity(parseInt(e.target.value))}
//                                 className="input input-bordered"
//                                 max={selectedProduct?.total_item || ""}
//                             />
//                         </div>
//                         <div>
//                             <label className="label-text">Total</label>
//                             <input
//                                 type="number"
//                                 value={(selectedProduct?.rate || 0) * quantity}
//                                 className="input input-bordered"
//                                 readOnly
//                             />
//                         </div>
//                         <button className="btn btn-primary" onClick={handleAdd}>
//                             Add
//                         </button>
//                     </div>

//                     {/* Responsive Table */}
//                     {addedProducts.length > 0 && (
//                         <div className="overflow-x-auto mt-4">
//                             <table className="table table-zebra w-full">
//                                 <thead>
//                                     <tr>
//                                         <th>SL</th>
//                                         <th>Product Code</th>
//                                         <th>Product Name</th>
//                                         <th>Rate</th>
//                                         <th>Quantity</th>
//                                         <th>Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {addedProducts.map((product, index) => (
//                                         <tr key={index}>
//                                             <td>{index + 1}</td>
//                                             <td>{product.productCode}</td>
//                                             <td>{product.productName}</td>
//                                             <td>{product.rate}</td>
//                                             <td>{product.quantity}</td>
//                                             <td>{product.totalItem}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default AddProduct;



import React, { useState } from "react";

const demoProducts = [
    { productCode: "P001", productName: "Product 1", total_item: 100, rate: 50, userEmail: "user1@example.com" },
    { productCode: "P002", productName: "Product 2", total_item: 200, rate: 30, userEmail: "user2@example.com" },
    { productCode: "P003", productName: "Product 3", total_item: 150, rate: 40, userEmail: "user3@example.com" },
];

const AddProduct = ({ handleAddProduct, addedProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleSelectProduct = (event) => {
        const productCode = event.target.value;
        const product = demoProducts.find((p) => p.productCode === productCode);
        setSelectedProduct(product);
    };

    const handleAdd = (event) => {
        event.preventDefault();
        if (selectedProduct && quantity > 0) {
            const totalItem = selectedProduct.rate * quantity;
            handleAddProduct({ ...selectedProduct, quantity, totalItem });
            setSelectedProduct(null);
            setQuantity(1);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full border p-4 shadow-md rounded-md">
                <form onSubmit={handleAdd}>
                    <h3 className="font-bold mb-3">Add Product</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div>
                            <label className="label-text">Product</label>
                            <select
                                className="select select-bordered w-full"
                                onChange={handleSelectProduct}
                                value={selectedProduct?.productCode || ""}
                            >
                                <option value="" disabled>
                                    Select product
                                </option>
                                {demoProducts.map((product) => (
                                    <option key={product.productCode} value={product.productCode}>
                                        {product.productName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="label-text">Rate</label>
                            <input
                                type="number"
                                value={selectedProduct?.rate || ""}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="label-text">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="input input-bordered w-full"
                                max={selectedProduct?.total_item || ""}
                            />
                        </div>
                        <div>
                            <label className="label-text">Total</label>
                            <input
                                type="number"
                                value={(selectedProduct?.rate || 0) * quantity}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-6 lg:mt-0">
                            Add
                        </button>
                    </div>
                </form>

                {/* Responsive Table */}
                {addedProducts.length > 0 && (
                    <div className="overflow-x-auto mt-4">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Rate</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addedProducts.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.productCode}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.rate}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.totalItem}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddProduct;
