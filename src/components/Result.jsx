import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

function Result({ data }) {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Ma'lumotlar
      </Typography>
      
      <Divider sx={{ marginBottom: 2 }} />

      {[
        { label: "Ism", value: data.ism },
        { label: "Familya", value: data.familya },
        { label: "Yosh", value: data.yosh },
        { label: "Jinsi", value: data.jinsi },
        { label: "Telefon", value: data.telefon },
        { label: "Kasbi", value: data.kasbi },
        { label: "Tajribasi", value: data.tajribasi },
        { label: "Talim", value: data.talim },
        { label: "Til", value: data.til },
        { label: "About", value: data.about },
        { label: "Qoshimcha", value: data.qoshimcha }
      ].map((item, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {item.label}:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {item.value}
          </Typography>
          {index < 15 && <Divider sx={{ marginTop: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}

export default Result;
