import { useTable, Column, TableOptions, useSortBy, usePagination } from "react-table";
// import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

// So wherever <T> will be used it will used as generic data type containing string and number
// type temp = {
//   status: string;
//   id: string;
//   amount: number;
// }

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,//this will set no. of products per page = 6
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,//this will limit products to the 10 max products
      prepareRow,
      pageCount, state: { pageIndex },
      gotoPage,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>



        <table className="table" {...getTableProps()}>

          <thead>
            {
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        {column.isSorted &&
                          <span>
                            {/* {column.isSortedDesc? (
                        <AiOutlineSortDescending />
                    ) : ( 
                        <AiOutlineSortAscending />
                    )} importing icons using react icons*/}
                            {" "}
                            {column.isSortedDesc ?
                              "🔽"
                              :
                              "🔼"
                            }
                          </span>}
                      </th>//pass Props getHeaderProps()
                    ))
                  }
                </tr>
              ))
            }
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>

          {/* For Pagination Page change under same page */}

        </table>
        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>First Page</button>
            <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>Next</button>
            <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>Last Page</button>
          </div>
        )
        }
      </div>
    );
  };
}

export default TableHOC;