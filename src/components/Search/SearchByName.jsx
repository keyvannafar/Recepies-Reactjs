import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByNameApi } from "../../api/Recipes";

function SearchByName() {
  const [searchInfo, setSearchInfo] = useState({
    name: "",
    number: "",
  });

  const dispatch = useDispatch();

  const searchBynameForm = (e) => {
    e.preventDefault();
    const search = {
      name: "pizza",
      number: "2",
    };
    dispatch(searchByNameApi(search));
  };

  return (
    <div className="opacity-75 p-4 bg-white rounded  w-25">
      <h3 className="mb-5">Search By Recipe Name</h3>

      <form>
        <div class="mb-3 ">
          <input
            type="text"
            class="form-control w-75 m-auto"
            id="recipeName"
            placeholder="Enter Recipe Name, ex: Pizza"
          />
        </div>

        <div className="mb-3">
          <label for="recipeName" class="form-label me-3">
            Number:
          </label>
          <select name="" id="" className="w-25">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={searchBynameForm}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchByName;
