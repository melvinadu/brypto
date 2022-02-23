import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Token from "../components/Token/Token";

const Home = () => {
  const [tokens, setTokens] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const tokensPerPage = 10;
  const pagesVisited = pageNumber * tokensPerPage;

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setTokens(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const displayTokens = tokens
    .slice(pagesVisited, pagesVisited + tokensPerPage)
    .map((token) => {
      return (
        <Token
          key={token.id}
          rank={token.market_cap_rank}
          name={token.name}
          image={token.image}
          symbol={token.symbol}
          marketcap={token.market_cap}
          high={token.high_24h}
          low={token.low_24h}
          price={token.current_price}
          pricechange24={token.price_change_percentage_24h}
          volume={token.total_volume}
        />
      );
    });

  console.log("-----", displayTokens.length);

  let pageCount = Math.ceil(tokens.length / tokensPerPage);

  let disabled = false;

  if (displayTokens.length < 10) {
    pageCount = 0;
    disabled = true;
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
    <h2>Top 100 Token Prices by Market Cap</h2>

      {displayTokens}

      <div className="paginationBttns">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          previousLinkClassName={`${disabled ? "disabled" : "previousBttn"}`}
          nextLinkClassName={`${disabled ? "disabled" : "nextBttn"}`}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      
    </>
  );
};

export default Home;