import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function SideBar({ handleOpen }) {
  const navigate = useNavigate();
  return (
    <Box
      role="presentation"
      onClick={() => {
        handleOpen();
      }}
    >
      <List>
        {list.map(({ name, path }, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              navigate(path);
            }}
          >
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const list = [
  {
    name: "Products",
    path: "products",
  },
  {
    name: "Add product",
    path: "add-product",
  },
];
