import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="min-w-[1000px] min-h-[70px] bg-black">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm cursor-pointer">Deliver to</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">Japan</div>
          </div>
        </div>
        <div className="flex grow relative items-center space-x-2">
  <input
    type="text"
    name=""
    id=""
    className="flex-grow text-slate-950 bg-white border border-slate-300 rounded-md shadow-md outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400 p-2 transition duration-200 ease-in-out"
    placeholder="Search item"
  />
  <button className="bg-orange-400 text-white rounded-md p-2 ml-2 transition duration-200 ease-in-out hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-amber-400">
    <FaSearch />
  </button>
</div>

        <div className="flex items-center m-4">
        <Link to={'/login'}>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm cursor-pointer">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">
              Accounts & Lists
            </div>
          </div>
        </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm cursor-pointer">Returns</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">& Orders</div>
          </div>
          <Link to={'/cart'}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {products.length}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;