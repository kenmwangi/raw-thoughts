import Link from "next/link";
import React from "react";
import Container from "./Container";

interface PaginationProps {
  totalPages: string;
  currentPage: string;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);
  return (
    <Container className="space-y-2 px-8 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              parseInt(currentPage) - 1 === 1
                ? `/thoughts/`
                : `/thoughts/${parseInt(currentPage) - 1}`
            }
          >
            <button>Previous</button>
          </Link>
        )}

        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/thoughts/${currentPage + 1}`}>
            <button>Next</button>
          </Link>
        )}
      </nav>
    </Container>
  );
};

export default Pagination;
