import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { useEffect } from "react";
import { fetchListAction } from "../redux/action/listAction";
import { ThunkDispatch } from "redux-thunk";

const List = () => {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  useEffect(() => {
    dispatch(fetchListAction());
  }, [dispatch]);

  const { loading, lists } = useSelector((data: any) => data);

  return (
    <>
      <Search />
      <br />
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Total Posts
        {!lists[0]?.id ? 0 : lists.length}
      </h1>
      {loading ? (
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-16">
          Loading...
        </h2>
      ) : (
        lists?.map((list: any) => (
          <div className="mt-3" key={list?.id}>
              {!list?.id ? (
              <h1 className="text-red-500 text-xl">No List Found</h1>
            ) : (
              <div className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {list?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {list?.email},{" "}
                  <a href={list?.website} className="text-blue-600 italic">
                    {list?.website}
                  </a>
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default List;
