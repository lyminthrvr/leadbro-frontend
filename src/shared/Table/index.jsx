import React, { useMemo, useRef } from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import { useTable, useSortBy, useGroupBy } from "react-table";
import { observer } from "mobx-react";
import { motion } from 'framer-motion';
import Card from "../Card";
import Icon from "../Icon";
import AdaptiveCards from "./AdaptiveCards";
import Title from "../Title";
import { clickRecursive } from "../../utils/click";
import { hoverTable } from "../../utils/motion.variants";

const Table = observer(({ columns, data, title, headerActions, cardComponent, ...rest }) => {

    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: { columnWidths: columns.map(col => col.width ? `${col.width}%` : 'auto') }
        },
        useGroupBy,
        useSortBy
    );

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = tableInstance;

    const headerSortingRef = useRef(null);
    const titleJsx = (
        <Title
            smallTable={rest.smallTable}
            tableActions={{
                sorting: (decr) => {
                    rows[0].allCells[0].column.toggleSortBy(decr);
                }
            }}
            tableHeaders={headerGroups}
            tableProps={getTableProps()}
            actions={headerActions}
            title={title}
        />
    );

    return (
        <div>
            {!rest.headerInCard && titleJsx}
            <Card className={cn(styles.card, { [styles.card_smallTable]: rest.smallTable })}>
                {rest.headerInCard && titleJsx}
                <div className={cn(styles.wrapper, { [styles.smallTable]: rest.smallTable })}>
                    <table {...getTableProps()}>
                        <thead>
                        {!rest.disableHeader && headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <motion.th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ width: column.width }}>
                                        <div className={cn(styles.headerCol_wrapper)}>
                                            <div
                                                className={cn(styles.headerCol)}
                                                onClick={(e) => {
                                                    if (column.canSort && !column.isSortedDesc)
                                                        clickRecursive(e.target);
                                                }}
                                                ref={headerSortingRef}
                                            >
                                                <span>{column.render('Header')}</span>
                                                {column.canSort && (
                                                    <span className={styles.margin}>
                                                        <div className={styles.flex}>
                                                            <Icon fill={'#6F767E'} name={'sort-arrow'} viewBox={'0 0 8 17'} size={20} />
                                                            <div className={cn(styles.component, { [styles.active]: column.isSortedDesc })}>
                                                                <span />
                                                                <span />
                                                                <span />
                                                            </div>
                                                        </div>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                        {rest.disableHeader ? (
                            headerGroups.map((group) =>
                                group.headers.filter(col => col.columns && !col.parent).map(col => {
                                    const colJsx = col.render('Header');
                                    return (
                                        <div className={styles.disable_header}>
                                            {Object.keys(colJsx.props).length ? <tr><td>{colJsx}</td></tr> : <></>}
                                            {rows.filter(el => el.id === col.originalId.split('_')[1]).map(row => {
                                                prepareRow(row);
                                                return (
                                                    <React.Fragment {...row.getRowProps()}>
                                                        <tr>
                                                            {row.cells.filter(cell => cell.column.parent.id === col.originalId).map(cell => (
                                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                            ))}
                                                        </tr>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            )) : (
                            rows.map(row => {
                                prepareRow(row);
                                return (
                                    <React.Fragment {...row.getRowProps()}>
                                        <tr>
                                            {row.cells.map(cell => (
                                                <td className={cell.column.flexCol && styles.flexCol} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                        )}
                        </tbody>
                    </table>
                </div>
            </Card>
            {cardComponent && <AdaptiveCards onPagination={rest?.onPagination ?? null} cardComponent={cardComponent} rows={rows} />}
        </div>
    );
});

export default Table;
