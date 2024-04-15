import { motion } from "framer-motion";
import "../../App.css";
import { ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ text, index }: any) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ padding: "1rem" }}
    >
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </motion.li>
  );
};
