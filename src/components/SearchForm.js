import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <Form>
       <Form type="text" placeholder="Search for a Character" onChange={props.handleChange} />
     </Form>
    </section>
  );
}
