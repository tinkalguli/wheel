import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contacts: yup.array().required("Minimum one contact is required"),
  tags: yup.array().required("Minimum one tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const ASSIGNED_CONTACTS = [
  { label: "Person1", value: "person1" },
  { label: "Person2", value: "person2" },
];

export const TAGS = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Onboarding", value: "onboarding" },
  { label: "User Flow", value: "user-flow" },
  { label: "UX", value: "ux" },
  { label: "Bugs", value: "bugs" },
  { label: "V2", value: "v2" },
];
