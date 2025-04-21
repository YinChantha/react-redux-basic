import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from '../redux/slice';

const Counter = () => {
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>   
      <h1 className='text-2xl font-bold text-center'>{count}</h1>
      <h1 className='text-sm font-bold text-center'>You can go to setting for filter color based on what you wan !!!</h1>
      <div className="mt-24 flex md:flex-row flex-col gap-3">
        <button onClick={() => dispatch(incrementByAmount(5))} className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
          <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span className="colorText">IncrementBy 5</span>
        </button>
        <button onClick={() => dispatch(increment())} className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
          <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span className="colorText">Increment</span>
        </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
          <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span className="colorText">Decrement</span>
        </button>
        <button onClick={() => dispatch(decrementByAmount(5))} className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
          <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span className="colorText">DecrementBy 5</span>
        </button>
        <button onClick={() => dispatch(reset())} className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
          <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
          </svg>
          <span className="colorText">Reset</span>
        </button>
      </div>
    </div>
  )
}

export default Counter