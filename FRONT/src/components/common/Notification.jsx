import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Notification({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            알림
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            noti -- data
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}