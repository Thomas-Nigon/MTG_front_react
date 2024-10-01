import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BrowsePaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  pageCount: number;
}

function BrowsePagination({
  currentPage,
  setPage,
  pageCount,
}: BrowsePaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => setPage(currentPage - 1)}
            />
          </PaginationItem>
        )}
        <div className="hidden sm:flex">
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setPage(currentPage)}
            >
              {currentPage}
            </PaginationLink>

            {currentPage + 1 < pageCount && (
              <PaginationLink
                className="cursor-pointer"
                onClick={() => setPage(currentPage + 1)}
              >
                {currentPage + 1}
              </PaginationLink>
            )}

            {currentPage + 2 < pageCount && (
              <PaginationLink
                className="cursor-pointer"
                onClick={() => setPage(currentPage + 2)}
              >
                {currentPage + 2}
              </PaginationLink>
            )}
          </PaginationItem>
        </div>

        <PaginationItem className="flex">
          <PaginationEllipsis />
          <PaginationLink
            className="cursor-pointer"
            onClick={() => setPage(pageCount)}
          >
            {pageCount}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 1 < pageCount && (
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => setPage(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default BrowsePagination;
