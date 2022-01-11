import React from 'react';
import { useTable, usePagination } from "react-table";
import {COLUMNS} from "../../Columns/Column";
import "./Milestones.css"


const Milestones = () => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
    } = useTable(
        {
            columns: COLUMNS,
            data: [],
        },
        usePagination
    )


    return (
        <>
        <span className="milestone__heading">MILESTONE</span>
            <div className="table_modal">
                <div className="table_container" style={{display: "flex", justifyContent: "center"}}>
                    <table {...getTableProps()} style={{minWidth: "100%"}}>
                        <thead>
                            {
                                headerGroups.map((headerGroup) =>
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render('Header')}
                                                </th>
                                            ))}
                                    </tr>
                                )}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map((row) => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map((cell) => {
                                                    return (
                                                        <td {...cell.getCellProps()} className="pl8">
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Milestones;