export const Navbar = () => {
  return (
    <nav className="w-[15%] bg-zinc-50 h-full flex flex-col items-center pt-6">
      <a
        href="/create"
        className="border-2 border-green-200 px-5 py-1 rounded text-green-300"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h3 className="w-[80%] text-2xl mb-2">Category Filter</h3>
      <ul className="w-[80%]">
        <li className="flex gap-2 items-center">
          <span className="w-[12px] h-[12px] bg-red-100 block rounded-full"></span>
          Cat 1
        </li>
        <li className="flex gap-2 items-center">
          <span className="w-[12px] h-[12px] bg-blue-100 block rounded-full"></span>
          Cat 1
        </li>
        <li className="flex gap-2 items-center">
          <span className="w-[12px] h-[12px] bg-green-100 block rounded-full"></span>
          Cat 1
        </li>
        <li className="flex gap-2 items-center">
          <span className="w-[12px] h-[12px] bg-sky-100 block rounded-full"></span>
          Cat 1
        </li>
      </ul>
    </nav>
  );
};
