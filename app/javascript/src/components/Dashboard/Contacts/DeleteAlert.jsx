import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setSelectedContactIds }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      onClose();
      setSelectedContactIds([]);
      Toastr.success("Contact deleted successfully");
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      style="primary"
      message="Are you sure you want to delete the contact? This action cannot be undone."
      title="Delete Contact"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
