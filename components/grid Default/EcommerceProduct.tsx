import React from "react";
import Image from "next/image";

export default function EcommerceProducts() {
  const products = [
    { name: "Vel elit euismod", Price: "$26.00", Oldprice: "$42.00", img: "/images/Ecommercelogo.png"},
    { name: "Ultricies condimentum imperdiet", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce1.png" },
    { name: "Vitae suspendisse sed", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce2.png" },
    { name: "Sed at fermentum", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce3.png" },
    { name: "Fusce pellentesque at", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce4.png" },
    { name: "Vestibulum magna laoreet", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce5.png" },
    { name: "Sollicitudin amet orci", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce6.png" },
    { name: "Ultrices mauris sit", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce7.png" },
    { name: "Pellentesque condimentum ac", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce8.png" },
    { name: "Cras scelerisque velit", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce9.png" },
    { name: "Lectus vulputate faucibus", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce10.png" },
    { name: "Purus risus, ut", Price: "Y523201", Oldprice: "$42.00", img: "/images/Ecommerce11.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-2 border-gray-200 pb-4 mb-6">
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Product Name */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                
                {/* Color Dots */}
                <div className="flex justify-center gap-2 mt-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                
                {/* Product Code */}
                <p className="text-gray-500 mt-2">{product.Price}</p>
                
                {/* Product Price */}
                <p className="text-red-500 font-bold">{product.Oldprice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
