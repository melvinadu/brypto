import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Token from "../components/Token/Token";

const Home = () => {
  const [tokens, setTokens] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  // console.log(tokens);

  const tokensPerPage = 10;
  const pagesVisited = pageNumber * tokensPerPage;

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setTokens(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayTokens = tokens
    .slice(pagesVisited, pagesVisited + tokensPerPage)
    .map((token) => {
      return (
        <Token
          key={token.id}
          name={token.name}
          image={token.image}
          symbol={token.symbol}
          marketcap={token.market_cap}
          price={token.current_price}
          pricechange={token.price_change_percentage_24h}
          volume={token.total_volume}
        />
      );
    });

  console.log(tokens.slice(pagesVisited, pagesVisited + tokensPerPage));
  console.log(displayTokens);

  const pageCount = Math.ceil(tokens.length / tokensPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="token-app">
        <div className="token-search">
          {/* <h1 className="token-text">Search your desired token</h1> */}
          <form action="">
            <input
              type="text"
              className="token-input"
              placeholder="Provide the token name"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {displayTokens}
      <div className="paginationBttns">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          // containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default Home;

{
  /* {filteredTokens.map((token) => {
        return (
          <Token
            key={token.id}
            name={token.name}
            image={token.image}
            symbol={token.symbol}
            marketcap={token.market_cap}
            price={token.current_price}
            pricechange={token.price_change_percentage_24h}
            volume={token.total_volume}
          />
        );
      })} */
}
