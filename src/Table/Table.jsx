    import React, { useState } from "react";
    import styles from './Table.module.css';

    const TableOfContents = ({ content }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 10;

        const totalPages = Math.ceil(content.length/rowsPerPage);
        const startIndex = (currentPage - 1) * rowsPerPage;
        const paginatedData = content.slice(startIndex, startIndex + rowsPerPage);

        const handleNextPage = () => {
            if (totalPages > currentPage) {
                setCurrentPage(currentPage + 1);
            }
        }

        const handlePrevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
        return (
            <div className={styles.container}>
                <h1>Employee Data Table</h1>
                <table>
                    <thead>
                        <tr className={styles.headings}>
                            <th style={{ width: '13%' }}>ID</th>
                            <th>Name</th>
                            <th style={{ width: '40%' }}>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((val, index) => (
                                <tr className={styles.contentList} key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No data available</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className={styles.pageNumbers}>
                    <button onClick={handlePrevPage}>Previous</button>
                    <button>{currentPage}</button>
                    <button onClick={handleNextPage}>Next</button>
                </div>
            </div>
        )
    };

    export default TableOfContents;