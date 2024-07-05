import React from 'react';
import { TextField, Stack, Typography } from '@mui/material';

function Step5({ handleChange, data }) {
  return (
    <Stack gap="20px">
      <Stack >
      <Typography variant="h6" component="h6" paddingY="16px">
      O'zingiz haqingizda yozing
</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="O'zingiz haqingizda yozing"
          name="about"
          id="about"
          value={data.about}
          placeholder="O'zingiz haqingizda yozing"
          onChange={handleChange}
          variant="outlined"
          required
        />
      </Stack>
      
      <Stack width="300px" >
      <Typography variant="h6" component="h6" paddingY="16px">
      Qo'shimcha ma'lumot
</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Qo'shimcha"
          name="qoshimcha"
          id="qoshimcha"
          value={data.qoshimcha}
          placeholder="Qo'shimcha"
          onChange={handleChange}
          variant="outlined"
          required
        />
      </Stack>
    </Stack>
  );
}

export default Step5;
