import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

export default function ContactForm({ onClose, contact, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={contact}
      onSubmit={() => {}}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full flex-grow-0 items-start justify-between">
              <Input
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
                className="mr-2"
                required
              />
              <Input
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
                className="ml-2"
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
              className="w-full flex-grow-0"
              required
            />
            <Select
              required
              label="Role"
              name="role"
              className="w-full flex-grow-0"
              options={ROLES}
              isSearchable={true}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              iconPosition="right"
              icon={Check}
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
