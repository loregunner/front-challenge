import { GiBroadsword } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { GiSwapBag } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import "./Search.css";
import useMediaCustom from "../../hooks/useMediaCustom";

const Search = () => {
  const { isDesktop } = useMediaCustom();
  return (
    <div className="container_search">
      <h2 className="container_search_title">Condimentum consectetur</h2>
      <div className="container_search_inputs">
        <div className="dropdown-game">
          <div className="dropdown-trigger" style={{ height: "26px" }}>
            <div>
              <GiBroadsword />
              <span style={{ marginLeft: "10px", letterSpacing: "1.3px" }}>
                Select a game
              </span>
            </div>
            <TiArrowSortedDown />
          </div>
        </div>
        <div className="search-container">
          <span className="search-icon">
            <CiSearch />
          </span>
          <input style={{ height: "26px" }} type="text" placeholder="Search" />
          {isDesktop && (
            <div className="container_dropdown">
              <div className="dropdown">
                <div
                  className="dropdown-trigger-all"
                  style={{ borderRight: "1px solid #888" }}>
                  <div className="container_select">
                    <GiSwapBag color="#39e29d" />
                    <div className="container_small">
                      <small>Price</small>
                      <span style={{ fontSize: "10px" }}>All</span>
                    </div>
                  </div>
                  <TiArrowSortedDown />
                </div>
              </div>
              <div className="dropdown">
                <div className="dropdown-trigger-all">
                  <div className="container_select">
                    <GiFeather color="#39e29d" />
                    <div className="container_small">
                      <small>Item type</small>
                      <span style={{ fontSize: "10px" }}>All</span>
                    </div>
                  </div>
                  <TiArrowSortedDown />
                </div>
              </div>
            </div>
          )}
        </div>
        {!isDesktop && (
          <div className="container_dropdown">
            <div className="dropdown">
              <div className="dropdown-trigger-all">
                <div className="container_select">
                  <GiSwapBag color="#39e29d" />
                  <div className="container_small">
                    <small>Price</small>
                    <span style={{ marginLeft: "10px", fontSize: "10px" }}>
                      All
                    </span>
                  </div>
                </div>
                <TiArrowSortedDown />
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-trigger-all">
                <div className="container_select">
                  <GiFeather color="#39e29d" />
                  <div className="container_small">
                    <small>Item type</small>
                    <span style={{ marginLeft: "10px", fontSize: "10px" }}>
                      All
                    </span>
                  </div>
                </div>
                <TiArrowSortedDown />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
