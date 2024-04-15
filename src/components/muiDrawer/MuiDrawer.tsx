import { List, Divider, Link } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../framer-drawer/MenuToggle";
import { MenuItem } from "../framer-drawer/menuItems";
import { sidebar } from "../framer-drawer/Element";
import "../../App.css";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
  { name: "Home", route: "/", index: 1 },
  { name: "Select", route: "/select", index: 2 },
  { name: "Mail", route: "/mail", index: 3 },
  { name: "Profile Page", route: "/profile", index: 4 },
  { name: "Error 404", route: "/page404", index: 5 },
];

export default function PersistentDrawerLeft() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const LinkNav = (name: string, route: string, index: number) => {
    return (
      <Link
        component={RouterLink}
        to={route}
        color="inherit"
        underline="none"
        key={name}
        sx={{
          mr: { xs: 0, md: 2 },
          mb: { xs: 2, md: 0 },
          textDecoration: "none",
        }}
      >
        <MenuItem key={name} text={name} index={index} />
      </Link>
    );
  };

  return (
    <motion.div
      className="background"
      variants={sidebar}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <Divider />
      <List>
        {navItems.map((item) => LinkNav(item.name, item.route, item.index))}
      </List>
    </motion.div>
  );
}
