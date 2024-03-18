const ProductCard = () => {
  return (
    <div className="border rounded shadow w-[18%] h-[30vh] flex flex-col items-center justify-center mr-2 mb-2">
      <div
        className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")`,
        }}
      ></div>
      <h1 className="text-center mt-2 p-2 hover:text-blue-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        expedita.
      </h1>
    </div>
  );
};

export default ProductCard;
