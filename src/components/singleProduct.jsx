import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const cards = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium">
        Card
      </p>
      <hr className="my-5" />
      {cards.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:space-x-6 mt-24">
          <div className="w-full lg:w-2/3 border rounded-xl overflow-hidden">
            <p className="bg-gray-200 px-5 py-3 font-medium text-xl">
              Item List
            </p>
            <div>
              {cards.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 flex items-center py-5 border-b "
                >
                  <div className="w-1/4">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="w-2/4 font-semibold">{item.title}</p>
                  <div className="w-1/4">
                    <div className="flex items-center space-x-5 font-bold">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded-md"
                        onClick={() => dispatch(decrease(item))}
                      >
                        -
                      </button>
                      <p>{item.total}</p>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded-md"
                        onClick={() => dispatch(increase(item))}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="font-bold flex space-x-2">
                        <span className="font-medium text-slate-500 mx-1">
                          {item.total}
                        </span>
                        x ${item.cost}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 rounded-xl overflow-hidden border">
            <OrderSummaty cards={cards} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10 h-[200px]">
          <p className="text-3xl sm:text-4xl lg:text-7xl font-thin text-center">
            Your Card is Empty
          </p>
          <Link to={"/products"}>
            <button className="border border-black rounded-lg text-black px-4 py-2 hover:bg-black hover:text-white transition-all">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
