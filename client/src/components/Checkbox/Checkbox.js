import React from "react"
import { Field } from "formik"

const Checkbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div
          className={
            "serviceSelect" +
            (props.wrapped ? " contact-wrapped-upperonly" : "")
          }
        >
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            id={props.value}
            className={props.className}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value
                )
                form.setFieldValue(props.name, nextValue)
              } else {
                const nextValue = field.value.concat(props.value)
                form.setFieldValue(props.name, nextValue)
              }
            }}
          />
          <label htmlFor={props.value}>{props.title}</label>
        </div>
      )}
    </Field>
  )
}

export default Checkbox
