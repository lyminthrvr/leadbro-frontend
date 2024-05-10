import React, {useRef, useState} from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../Checkbox";
import Loader from "../Loader";
import Row from "./Row";
import {useTable} from "react-table";
import Card from "../Card";
import {useSortBy} from "react-table";
import Icon from "../Icon";
import {clickRecursive} from "../../utils/click";
import AdaptiveCards from "./AdaptiveCards";
import Title from "../Title";
import {observer} from "mobx-react";

const Table = observer(({columns, data, title,headerActions,statusType}) => {
    console.log(data, 'data')
    // const [chooseAll, setChooseAll] = useState(false);
    //
    // const [selectedFilters, setSelectedFilters] = useState([]);
    //
    // const handleChange = (id) => {
    //   if (selectedFilters.includes(id)) {
    //     setSelectedFilters(selectedFilters.filter((x) => x !== id));
    //   } else {
    //     setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    //   }
    // };
    //
    // return (
    //   <div className={styles.wrapper}>
    //     <div className={styles.table}>
    //       <div className={styles.row}>
    //         <div className={styles.col}>
    //           <Checkbox
    //             className={styles.checkbox}
    //             value={chooseAll}
    //             onChange={() => setChooseAll(!chooseAll)}
    //           />
    //         </div>
    //         <div className={styles.col}>Product</div>
    //         <div className={styles.col}>Price</div>
    //         <div className={styles.col}>{title}</div>
    //       </div>
    //       {items.map((x, index) => (
    //         <Row
    //           item={x}
    //           key={index}
    //           index={index}
    //           value={selectedFilters.includes(x.id)}
    //           onChange={() => handleChange(x.id)}
    //         />
    //       ))}
    //     </div>
    //     <div className={styles.foot}>
    //       <button className={cn("button-stroke button-small", styles.button)}>
    //         <Loader className={styles.loader} />
    //         <span>Load more</span>
    //       </button>
    //     </div>
    //   </div>
    // );
    const tableInstance = useTable({columns, data}, useSortBy)

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = tableInstance
    const headerSortingRef = useRef(null)
    console.log(getTableProps(), 'table')
    return (// apply the table props
        <div>
        <Title tableActions={{
            sorting:(decr)=> {
                rows[0].allCells[0].column.toggleSortBy(decr)
            }
        }} tableHeaders={headerGroups} tableProps={getTableProps()} actions={headerActions} title={title}/>
            <Card className={styles.card}>
                <div className={styles.wrapper}>
                    <table  {...getTableProps()}>
                        <thead>
                        {// Loop over the header rows
                            headerGroups.map(headerGroup => (// Apply the header row props
                                <tr  {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                        headerGroup.headers.map(column => {// Apply the header cell props
                                            return <th
                                                className={cn('', {[styles.activeSorting]: column.isSorted})} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                <div onClick={(e) => {
                                                    if (column.canSort && !column.isSortedDesc)
                                                        clickRecursive(e.target)
                                                    // e.stopPropagation()
                                                    // e.preventDefault()
                                                    // this.click()
                                                }} ref={headerSortingRef}
                                                     className={cn(styles.headerCol, {[styles.activeSorting]: column.isSorted})}>
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
                                            </th>
                                        })}
                                </tr>))}
                        </thead>
                        {/* Apply the table body props */}
                        <tbody {...getTableBodyProps()}>
                        {// Loop over the table rows
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
            <AdaptiveCards statusType={statusType} rows={rows}/>
        </div>)
});

export default Table;
