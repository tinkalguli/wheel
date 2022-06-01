import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";
import { CONTACTS } from "components/Dashboard/Contacts/constants";

import { NOTES_FORM_VALIDATION_SCHEMA, TAGS } from "../constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const assignedContacts = CONTACTS.map(contact => ({
    ...contact,
    value: contact.email,
    label: contact.name,
  }));

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              placeholder="Enter note title"
              className="w-full flex-grow-0"
              required
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Enter note description"
              className="w-full flex-grow-0"
              rows={4}
              required
            />
            <Select
              required
              label="Assigned Contact"
              isMulti={true}
              name="assigned_contacts"
              className="w-full flex-grow-0"
              options={assignedContacts}
              isSearchable={true}
              placeholder="Select Contacts"
            />
            <Select
              required
              label="Tags"
              isMulti={true}
              name="tags"
              className="w-full flex-grow-0"
              options={TAGS}
              isSearchable={true}
              placeholder="Select Tags"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
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
