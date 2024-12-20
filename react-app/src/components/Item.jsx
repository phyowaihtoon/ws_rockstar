import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function Item({ item, remove }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent:"space-between" ,alignItems:"flex-start"}}>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 32, height: 32, background: blue[500] }} />
            <Typography sx={{ fontWeight: "bold" }}>{item.user.name}</Typography>
          </Box>
          <IconButton size="small" onClick={() => remove(item.id)}>
            <DeleteIcon sx={{ fontSize: 24 }}></DeleteIcon>
          </IconButton>
        </Box>

        <Box>{item.content}</Box>
      </CardContent>
    </Card>
  );
}
