import React, { useState } from "react";
import { Header } from "./../../components/Products/EditProduct/Header";
import { ProductDetails } from "./../../components/Products/EditProduct/ProductDetails";
import { ProductStatus } from "./../../components/Products/EditProduct/ProductStatus";
import { ProductImages } from "./../../components/Products/EditProduct/ProductImages";
import StockTable from "../../components/Products/EditProduct/StockTable";
import CategorySelector from "../../components/Products/EditProduct/CategorySelector";

function EditProduct() {
    const categories= [
        {
          id: '1',
          name: 'Clothing',
        
        },
        {
          id: '2',
          name: 'Accessories',
          subcategories: [
            { id: '2-1', name: 'Bags' },
            { id: '2-2', name: 'Jewelry' },
          ],
        },
        {
          id: '3',
          name: 'Footwear',
          subcategories: [
            { id: '3-1', name: 'Sneakers' },
            { id: '3-2', name: 'Boots' },
    ]}]
    const [selectedCategory, setSelectedCategory] = useState('');
   //const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [name, setName] = useState("Gamer Gear Pro Controller");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
  );
  const [status, setStatus] = useState("");
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
  ]);

  const handleImageUpload = (file) => {
    //(file: File)
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages([...images, reader.result]); //setImages([...images, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = (index) => {
    //(index: number)
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen">
      <Header
        title="Pro Controller"
        inStock={true}
        onBack={() => console.log("back")}
      />

      <div className="max-w-full mx-auto p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <ProductDetails
            name={name}
            description={description}
            onNameChange={setName}
            onDescriptionChange={setDescription}
          />
          <StockTable />
          <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          //selectedSubcategory={selectedSubcategory}
          onCategoryChange={setSelectedCategory}
          //onSubcategoryChange={setSelectedSubcategory}
        />
        {/* <StockTable items={stockData} /> */}
      </div>
    </div>
        </div>

        <div className="space-y-6">
          <ProductStatus status={status} onStatusChange={setStatus} />
          <ProductImages
            images={images}
            onImageUpload={handleImageUpload}
            onImageRemove={handleImageRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
