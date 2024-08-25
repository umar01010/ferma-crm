import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoOptionsOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuPlusCircle } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";

import "./TeModalFilter.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "554px",
  borderRadius: "24px",
  boxShadow: "-6px 0px 16px 0px rgba(6, 22, 38, 0.07)",
  backgroundColor: "rgb(255, 255, 255)",
};

const buttonFilterStyle = {
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
      <Button onClick={handleOpen} sx={buttonFilterStyle}>
        <div variant="contained" className="users_search_left_filter">
          <IoOptionsOutline />
          Фильтр
        </div>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="modal_filter_table_title"
          >
            Фильтр
            <IoCloseOutline
              className="modal_close_table"
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            className="modal_filter_description"
          >
            <div className="model_filter_table">
              <div className="model_filter_table_roles_2">
                <h5 className="filter_roles">Роль</h5>
                <div className="model_filter_option_select">
                  <select id="role-select" className="model_filter_option">
                    <option value="courier">Курьер</option>
                    <option value="admin">Администратор</option>
                  </select>
                  <IoIosArrowDown className="modal_filter_IoIosArrowDown" />
                </div>
              </div>
              <div className="modal_filter_buttons">
                <button className="modal_filter_button_cancel">
                  <ImCancelCircle className="modal_filter_icon_cancel" />
                  Отменить
                </button>
                <button className="modal_button_add">
                  <LuPlusCircle className="modal_icon_plus" />
                  Фильтровать{" "}
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
