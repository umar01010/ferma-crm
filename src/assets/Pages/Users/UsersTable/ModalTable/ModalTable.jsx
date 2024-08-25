import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import "./ModalTable.css";

const buttonStyle = {
  width: "25px",
  height: "30px",
  padding: 0,
  minWidth: "auto",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "none",
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle}>
        <div className="modal_deleteicon">
          <RiDeleteBinLine />
        </div>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <Typography id="modal-modal-title" className="modal_deldete_title">
            Удалить
            <IoCloseOutline className="close-icon" onClick={handleClose} />
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            className="modal_delete_description"
          >
            <div className="modal_delete_common">
              <div className="modal_delet_user">
                Вы действительно хотите удалить "Janibek Maxatov"?
              </div>
              <div className="modal_btn_del">
                <button className="modal_table_cancel_button">
                  <ImCancelCircle className="modal_ImCancelCircle" />
                  Отменить
                </button>
                <button className="modal_table_delete_button">
                  <AiOutlineDelete className="modal_AiOutlineDelete" />
                  Да, удалить
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
