import React, { Suspense } from "react";
import { useParams, Link } from "react-router-dom";

export default function Page() {
    let { pageNumber } = useParams();
    const pageNumberInt = parseInt(pageNumber);

    // Dynamically import the page component based on the pageNumber
    const PageComponent = React.lazy(() => import(`./P${pageNumber}`));

    // Function to check if the previous page exists
    const hasPreviousPage = () => pageNumberInt > 1;

    // Function to check if the next page exists (assuming you have a total of 31 pages)
    const hasNextPage = () => pageNumberInt < 31;

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PageComponent />
            </Suspense>
            <div className="flex justify-between">
                {hasPreviousPage() && (
                    <Link to={`/page/${pageNumberInt - 1}`}>&lt; Prev Page</Link>
                )}
                {hasNextPage() && (
                    <Link to={`/page/${pageNumberInt + 1}`}>Next Page &gt;</Link>
                )}
            </div>
        </div>
    );
}
