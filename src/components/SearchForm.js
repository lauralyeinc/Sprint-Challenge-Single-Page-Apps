import React from "react";

import './searchform.css'; 

export default function SearchForm(props) {
  return (
    <section className="search-form">
    <form>
      <label>
      <input onChange={props.handleChange} name="searchform" type="text" placeholder="Search for a Character" />
      </label>
    </form>
    </section>
  );
}
