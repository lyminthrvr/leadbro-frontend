import React, {useMemo, useRef, useState} from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../Checkbox";
import Loader from "../Loader";
import Row from "./Row";
import {defaultGroupByFn, useTable} from "react-table";
import Card from "../Card";
import {useSortBy} from "react-table";
import Icon from "../Icon";
import {clickRecursive} from "../../utils/click";
import AdaptiveCards from "./AdaptiveCards";
import Title from "../Title";
import {observer} from "mobx-react";
import {useGroupBy} from "react-table";

const Table = observer(({columns, data, title, headerActions, cardComponent, ...rest}) => {
    const {grouping}=rest

    const tableInstance = useTable({columns, data},useGroupBy, useSortBy)
    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = tableInstance

    const headerSortingRef = useRef(null)
    const titleJsx = <Title smallTable={rest.smallTable}  tableActions={{
        sorting: (decr) => {
            rows[0].allCells[0].column.toggleSortBy(decr)
        }
    }} tableHeaders={headerGroups} tableProps={getTableProps()} actions={headerActions} title={title}/>
    return (// apply the table props
        <div>
            {(!rest.headerInCard) && titleJsx}
            <Card className={cn(styles.card,{[styles.card_smallTable]:rest.smallTable})}>
                {rest.headerInCard && titleJsx}
                <div className={cn(styles.wrapper, {[styles.smallTable]: rest.smallTable})}>
                    <table  {...getTableProps()}>
                        <thead>
                        {// Loop over the header rows
                            !rest.disableHeader &&
                            headerGroups.map(headerGroup => (// Apply the header row props
                                <tr  {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                        headerGroup.headers.map(column => {// Apply the header cell props
                                            return <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                <div
                                                    className={cn(styles.headerCol_wrapper, {[styles.activeSorting]: column.isSorted})}>
                                                    <div className={cn(styles.headerCol)} onClick={(e) => {
                                                        if (column.canSort && !column.isSortedDesc)
                                                            clickRecursive(e.target)
                                                        // e.stopPropagation()
                                                        // e.preventDefault()
                                                        // this.click()
                                                    }} ref={headerSortingRef}
                                                    >
                                                        <span>{column.render('Header')}</span>
                                                        <span>
                                                    {column.canSort &&
                                                        <div>
                                                            <Icon fill={'#6F767E'}
                                                                  className={cn(styles.sortingArrow, {[styles.down]: column.isSortedDesc})}
                                                                  name={'arrow-top'}/>
                                                        </div>}
                                                </span>
                                                    </div>
                                                </div>
                                            </th>
                                        })}
                                </tr>))}
                        </thead>
                        {/* Apply the table body props */}
                        <tbody {...getTableBodyProps()}>
                        {// Loop over the table rows
                            rest.disableHeader ? headerGroups.map((group)=>{
                                return group.headers.filter(col=>col.columns && !col.parent).map(col=>{

                                    return <div className={styles.disable_header}>
                                        <tr><td>{col.render('Header')}</td></tr>
                                    {rows.map(row=>{
                                        prepareRow(row)
                                        return <React.Fragment {...row.getRowProps()}>
                                            <tr>
                                                {row.allCells.filter(cell=>cell.column.parent.id===col.originalId).map(cell => {
                                                    return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                                })}
                                            </tr>
                                        </React.Fragment>}
                                    )}</div>
                                })
                                }) :
                            rows.map(row => {
                                // Prepare the row for display
                                prepareRow(row)
                                return (// Use a React.Fragment here so the table markup is still valid
                                    <React.Fragment {...row.getRowProps()}>
                                        <tr>
                                            {row.cells.map(cell => {
                                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                            })}
                                        </tr>
                                    </React.Fragment>)
                            })}
                        </tbody>
                    </table>
                </div>
            </Card>
            {cardComponent && <AdaptiveCards cardComponent={cardComponent} rows={rows}/>}
        </div>)
});

export default Table;
