import React, { useMemo, useRef, useState } from "react";
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
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Image from "../Image";

const Table = observer(({ columns, data, title, headerActions, cardComponent, editComponent, ...rest }) => {
    const [editingRowIndex, setEditingRowIndex] = useState(null);

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

    const renderRow = (row, index) => {
        prepareRow(row);
        const isEditing = editComponent && (index === editingRowIndex);

        return (
            <React.Fragment key={row.id} {...row.getRowProps()}>
                <tr>
                    {row.cells.map(cell => {
                        return (
                        <td className={cell.column.flexCol && styles.flexCol} {...cell.getCellProps()}>
                            {isEditing && cell.column.editing ? (
                                typeof editComponent === 'function' ? (
                                    editComponent(row.original)
                                ) : (
                                    <TextInput
                                        type={'textarea'}
                                        edited={true}
                                        value={cell.value}
                                        onChange={e => {
                                            cell.column.onChange && cell.column.onChange(e.target.value)
                                            // Handle inline editing
                                            // You might need to use a local state to store the changes and update the data accordingly
                                        }}
                                    />
                                )
                            ) : (
                                cell.render('Cell')
                            )}
                        </td>
                        )})}
                    {editComponent && (
                        <td>
                            <div className={styles.editButton} onClick={() => setEditingRowIndex(isEditing ? null : index)}>
                                {/*{isEditing ? 'Save' : 'Edit'}*/}
                                {!isEditing ? <Icon fill={'#6F767E66'} name={'edit'} size={20}/> : <Icon fill={'#FF6A55'} name={'check-circle'} size={20}/> }
                            </div>
                        </td>
                    )}
                </tr>
            </React.Fragment>
        );
    };

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
                                        <div className={styles.disable_header} key={col.id}>
                                            {Object.keys(colJsx.props).length ? <tr><td>{colJsx}</td></tr> : <></>}
                                            {rows.filter(el => el.id === col.originalId.split('_')[1]).map(row => {
                                                prepareRow(row);
                                                return (
                                                    <React.Fragment key={row.id} {...row.getRowProps()}>
                                                        <tr>
                                                            {row.cells.filter(cell => cell.column.parent.id === col.originalId).map(cell => (
                                                                <td key={cell.column.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                            ))}
                                                        </tr>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            )) : (
                            rows.map((row, index) => renderRow(row, index))
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
