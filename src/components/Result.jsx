import React from 'react';
import { Box, Typography } from '@mui/material';

function Result({ data }) {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Ma'lumotlar
      </Typography>

      <Typography variant="body1">
        <strong>Ism:</strong> {data.ism}
      </Typography>
      <Typography variant="body1">
        <strong>Familya:</strong> {data.familya}
      </Typography>
      <Typography variant="body1">
        <strong>Yosh:</strong> {data.yosh}
      </Typography>
      <Typography variant="body1">
        <strong>Jinsi:</strong> {data.jinsi}
      </Typography>
      <Typography variant="body1">
        <strong>Telefon:</strong> {data.telefon}
      </Typography>
      <Typography variant="body1">
        <strong>Kasbi:</strong> {data.kasbi}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {data.email}
      </Typography>
      <Typography variant="body1">
        <strong>Telegram:</strong> {data.telegram}
      </Typography>
      <Typography variant="body1">
        <strong>Instagram:</strong> {data.instagram}
      </Typography>
      <Typography variant="body1">
        <strong>Linkedin:</strong> {data.linkedin}
      </Typography>
      <Typography variant="body1">
        <strong>Skills:</strong> {data.skills}
      </Typography>
      <Typography variant="body1">
        <strong>Tajribasi:</strong> {data.tajribasi}
      </Typography>
      <Typography variant="body1">
        <strong>Talim:</strong> {data.talim}
      </Typography>
      <Typography variant="body1">
        <strong>Til:</strong> {data.til}
      </Typography>
      <Typography variant="body1">
        <strong>About:</strong> {data.about}
      </Typography>
      <Typography variant="body1">
        <strong>Qoshimcha:</strong> {data.qoshimcha}
      </Typography>

      
    </Box>
  );
}

export default Result;
