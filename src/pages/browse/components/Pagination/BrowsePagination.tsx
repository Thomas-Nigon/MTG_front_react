import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface BrowsePaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

function BrowsePagination({ currentPage, setPage }: BrowsePaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPage(currentPage - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPage(currentPage - 1)}>
            {currentPage}
          </PaginationLink>
          <PaginationLink onClick={() => setPage(currentPage + 1)}>
            {currentPage + 1}
          </PaginationLink>
          <PaginationLink onClick={() => setPage(currentPage + 2)}>
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => setPage(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default BrowsePagination;
