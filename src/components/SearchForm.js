import React from "react";
import { Form, Field } from "formik"; 


export default function SearchForm() {
  return (
    <section className="search-form">
     <Form>
       <Field name="searchform" type="searchform" placeholder="Search for a Character" />
     </Form>
    </section>
  );
}
