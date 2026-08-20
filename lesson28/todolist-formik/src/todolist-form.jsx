import { Formik, Form, Field, ErrorMessage } from "formik";

function validate(values) {
  const errors = {};
  const text = values.text.trim();
  if (!text) {
    errors.text = "Поле не може бути порожнім";
  } else if (text.length < 5) {
    errors.text = `Мінімум 5 символів (зараз ${text.length})`;
  }
  return errors;
}
export default function TodolistForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.text.trim());
        resetForm();
      }}
    >
      <Form>
        <Field
          name="text"
          type="text"
          placeholder="Введіть задачу (мін. 5 символів)"
        />
        <ErrorMessage name="text" component="div" className="error" />
        <button type="submit">Додати</button>
      </Form>
    </Formik>
  );
}
