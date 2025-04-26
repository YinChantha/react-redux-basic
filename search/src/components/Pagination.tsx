import ReactPaginate from 'react-paginate'
interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination:React.FC<PaginationProps>  = ({pageCount, onPageChange}) => {
  return (
    <ReactPaginate
        previousLabel="<< previous"
        nextLabel={"Next >>"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"pagination bg-none flex justify-center space-x-2 mt-4"}
        pageClassName={"px-3 py-1  cursor-pointer"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"px-3 py-1  cursor-pointer"}
        nextClassName={"px-3 py-1  cursor-pointer"}
    />
  )
}

export default Pagination