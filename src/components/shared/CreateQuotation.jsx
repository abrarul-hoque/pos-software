import React, { useState } from "react";
import AddProduct from "./AddProduct";
import Cart from "./Cart";

const CreateQuotation = () => {
    const [addedProducts, setAddedProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [vat, setVat] = useState(5);

    const handleAddProduct = (product) => {
        setAddedProducts((prev) => [...prev, product]);
        setTotal((prev) => prev + product.totalItem);
    };

    const handleCreateQuotation = () => {
        console.log("Quotation Data:");
        console.log(addedProducts);
    };

    return (
        <div>
            <h2>Create Quotation</h2>
            <div>
                <form className="card-body">
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customer Name</span>
                            </label>
                            <input type="text" placeholder="Customer Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Contact No</span>
                            </label>
                            <input type="number" placeholder="Contact No" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Ref.</span>
                            </label>
                            <input type="text" placeholder="Reference" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Remarks</span>
                            </label>
                            <input type="text" placeholder="Remarks" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Add Product */}
                    <div className="flex flex-col md:flex-row lg:flex-row">
                        <div className="w-10/12">
                            <AddProduct handleAddProduct={handleAddProduct} addedProducts={addedProducts} />

                        </div>
                        {/* Cart */}
                        <div className="w-2/12">
                            <Cart
                                addedProducts={addedProducts}
                                total={total}
                                vat={vat}
                                handleCreateQuotation={handleCreateQuotation}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateQuotation;
