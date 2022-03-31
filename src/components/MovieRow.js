import React from "react";
import './MovieRow.css';

export default function MovieRow({ items, title }) {
  console.log(items);
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="MovieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}