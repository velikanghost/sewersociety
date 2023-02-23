import { FiChevronLeft, FiChevronsRight } from "react-icons/fi"

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize)

  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  const Prev = () =>
    currentPage <= 1 ? currentPage : onPageChange(currentPage - 1)
  const Next = () =>
    currentPage >= pagesCount ? currentPage : onPageChange(currentPage + 1)

  return (
    <div className="pagination-container mx-auto mt-4">
      <ul className="pagination inline-flex items-center -space-x-px rounded-lg">
        <li
          className={`rounded-l-lg ${
            currentPage <= 1 ? "bg-black text-gray-400" : ""
          }`}
          onClick={Prev}
        >
          <FiChevronLeft />
        </li>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={`${
                currentPage == page ? "pageItem active" : "pageItem"
              }`}
            >
              <a className="pageLink" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          )
        })}
        <li className="rounded-r-lg" onClick={Next}>
          <FiChevronsRight />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
