import React from "react";


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
