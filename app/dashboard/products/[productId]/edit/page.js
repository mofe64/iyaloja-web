export default function EditProduct({ params }) {
  return (
    <div className="min-h-screen">
      <h1>Edit an existing product</h1>
      <div className="md:p-4">
        <div>
          <label htmlFor="productName" className="ml-1">
            Product name
          </label>
          <input type="text" name="productName" className="outline-primary" />
        </div>
        <div>
          <label htmlFor="productDesc"> Product Description</label>
          <textarea name="productDesc" className="outline-primary" />
        </div>
        <div>
          <label htmlFor="productPrice"> Product price (₦)</label>
          <input
            type="number"
            name="productPrice"
            className="outline-primary"
          />
        </div>
        <div>
          <label htmlFor="productQuantity"> Product quantity</label>
          <input
            type="number"
            name="productQuantity"
            className="outline-primary"
          />
        </div>
        <div>
          <label htmlFor="productImage"> Product Image</label>
          <input type="file" name="productImage" className="outline-primary" />
        </div>
        <div className="flex mt-4">
          <label htmlFor="isFeatured" className="mr-2">
            Feature this product ?
          </label>
          <input
            type="checkbox"
            name="isFeatured"
            className="outline-primary w-5 mb-0"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-primary px-4 py-1 rounded-sm text-white text-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
