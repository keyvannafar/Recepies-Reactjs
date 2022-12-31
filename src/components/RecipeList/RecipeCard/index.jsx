import React from "react";

function RecipeCard({ id, image, title, summary }) {
  return (
    <div class="col" id={id}>
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{summary.substr(0, 100)}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
