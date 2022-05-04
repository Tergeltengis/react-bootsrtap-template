import { Box, List, ListItem, ListItemText } from "@mui/material";

export function SideBar({ handleOpen }) {
  return (
    <Box
      role="presentation"
      onClick={() => {
        handleOpen();
      }}
    >
      <List>
        {list.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const list = ["products", "Starred"];
