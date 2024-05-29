import React, {useRef, useState} from "react";
import cn from "classnames";
import styles from "./Search.module.sass";
import Icon from "../../Icon";
import Item from "./Item";
import Suggestion from "./Suggestion";
import OutsideClickLayout from "../../Layouts/outsideClickLayout";
import useOutsideClick from "../../../hooks/useOutsideClick";

const result = [
  {
    title: "Put your title here",
    content: "Small caption",
    image: "/images/content/product-pic-3.jpg",
    image2x: "/images/content/product-pic-3@2x.jpg",
  },
  {
    title: "Put your title here",
    content: "Small caption",
    image: "/images/content/product-pic-4.jpg",
    image2x: "/images/content/product-pic-4@2x.jpg",
  },
];

const suggestions = [
  {
    title: "Put your title here",
    content: "Small caption",
    icon: "photos",
  },
  {
    title: "Put your title here",
    content: "Small caption",
    icon: "photos",
  },
];

const Search = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);
  const ref=useRef(null)
  const [text,setText] = useState('')
  useOutsideClick(ref,()=>setVisible(false))
  const inputRef = useRef(null)
  return (
    <>
      <div
          ref={ref}
        className={cn(styles.search, className, { [styles.active]: visible })}
      >
        <div className={styles.head}>
          <button className={styles.start}>
            <Icon className={styles.searchIcon} name="search" size="24" />
          </button>
          <button className={styles.direction}>
            <Icon name="arrow-left" size="24" />
          </button>
          <input
              ref={inputRef}
              value={text}
            className={styles.input}
            type="text"
            placeholder="Поиск"
            onChange={({target}) => {
              setText(target.value)
              setVisible(true)

            }
            }
          />
          {/*<button className={styles.result}>⌘ F</button>*/}
          <button className={styles.close} onClick={() => {
            setText('')
            inputRef.current.blur()
            setVisible(false)

          }}>
            <Icon name="close-circle" size="24" />
          </button>
        </div>
        <div className={styles.body}>
          <div className={styles.box}>
            <div className={styles.category}>Recent search</div>
            <div className={styles.list}>
              {result.map((x, index) => (
                <Item
                  className={styles.item}
                  item={x}
                  key={index}
                  onClick={() => setVisibleModalProduct(true)}
                />
              ))}
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.category}>Suggestions</div>
            <div className={styles.list}>
              {suggestions.map((x, index) => (
                <Suggestion
                  className={styles.item}
                  item={x}
                  key={index}
                  onClick={() => setVisibleModalProduct(true)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*<ModalProduct*/}
      {/*  visible={visibleModalProduct}*/}
      {/*  onClose={() => setVisibleModalProduct(false)}*/}
      {/*/>*/}
    </>
  );
};

export default Search;
