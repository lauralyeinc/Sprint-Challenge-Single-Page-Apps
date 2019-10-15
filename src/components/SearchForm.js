import React from "react";

// const handleSubmit = (event) => {
//   event.preventDefault(); 
// }

export default function SearchForm(props) {
  return (
    <section className="search-form">
    <form onSubmit={() => props.handleChange()}>
      <label>
      <input name="searchform" type="text" placeholder="Search for a Character" />
      </label>
      <label>
        <button>
          Find my Character!
        </button >
      </label>
    </form>
    </section>
  );
}
