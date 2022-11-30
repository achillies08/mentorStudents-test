import { Button, Card, CardActionArea, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import renderContext from "./renderContext";

const AdCard = () => {
  const { ad } = React.useContext(renderContext);
  return (
    <Card
      elevation={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "pink",
      }}
    >
      <CardActionArea href={"https://" + ad.url}>
        <Typography variant="h4">{ad.name}</Typography>
        <Typography variant="body1" color="initial">
          {ad.primaryText}
        </Typography>
        <img src={ad.imageUrl} alt={ad.name} width="400px" height="400px" />
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="h6">{ad.headline}</Typography>
          <Button variant="contained" size="small">
            {ad.CTA}
          </Button>
        </Stack>
        <Typography variant="body2">{ad.description}</Typography>
      </CardActionArea>
    </Card>
  );
};

export default AdCard;
