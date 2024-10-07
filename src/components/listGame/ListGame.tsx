/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ListGame.css";
import filter from "../../assets/images/filter.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useEffect, useState } from "react";
import Pagination from "../../ui/pagination/Pagination";
import useMediaCustom from "../../hooks/useMediaCustom";
import { TiArrowSortedDown } from "react-icons/ti";
import rs3 from "../../assets/images/rs3.png";
import { FaCartShopping } from "react-icons/fa6";

const ListGame = ({ images }: any) => {
  const { isDesktop } = useMediaCustom();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    if (isDesktop) {
      setPostsPerPage(15);
    }
  }, [isDesktop]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Object.keys(images).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container_list">
      <div className="container_header_card">
        <p className="title_list">Showing 20 - from 125</p>
        <div className="dropdown" style={{width: "fit-content"}}>
          <div className="dropdown-trigger-card">
            <div className="container_select">
              <img src={filter} alt="filter" />
              <div className="container_small">
                <small>Sort By</small>
                <span style={{ fontSize: "10px" }}>Featured</span>
              </div>
            </div>
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
      <div className="container_list_animals">
        {currentPosts.map((imageKey) => (
          <div key={imageKey} className="card_list">
            <div className="header_card">
              <p className="colored-dot">On sale</p>
              <div className="counter-container">
                <span id="counter">1</span>
                <div className="arrow">
                  <IoMdArrowDropup style={{ marginBottom: "-8px" }} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
            <div className="stock_container">In stock</div>
            <img src={images[imageKey]?.default} alt={imageKey} />
            <div className="product-card">
              <div className="product-info">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <h2 className="product-title">Blue Partyhat</h2>
                  <div className="product-badge">
                    <img src={rs3} alt="rs3" />
                  </div>
                </div>
                <div className="product-price">
                  <span className="current-price">$450.00</span>
                  <span className="old-price">
                    <span className="line-through">$522.50</span>
                  </span>
                </div>
                <p className="product-description">
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr.
                </p>
              </div>
              <div className="product-buttons">
                <button className="details-button">Details</button>
                <button className="add-button">
                  <span>Add</span>
                  <span className="cart-icon">
                    <FaCartShopping />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Object.keys(images)?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ListGame;
