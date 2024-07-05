import React from 'react';
import { TextField, Stack, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function Step4({ handleChange, data }) {
  return (
    <Stack gap="20px">
      <Stack >
        <TextField
          fullWidth
          label="Ko'nikmalaringiz"
          name="skills"
          id="skills"
          value={data.skills}
          onChange={handleChange}
          placeholder="Masalan: HTML, CSS, JS,...."
          variant="outlined"
          required
        />
      </Stack>

      <Stack >
        <FormControl fullWidth variant="outlined">
          <InputLabel id="tajribasi-label">Tajribangiz</InputLabel>
          <Select
            labelId="tajribasi-label"
            name="tajribasi"
            id="tajribasi"
            value={data.tajribasi}
            onChange={handleChange}
            label="Tajribangiz"
            required
          >
            <MenuItem value="1 yildan kam">1 yildan kam</MenuItem>
            <MenuItem value="1 yildan kop">1 yildan ko'p</MenuItem>
            <MenuItem value="2 yildan kop">2 yildan ko'p</MenuItem>
            <MenuItem value="5 yildan kop">5 yildan ko'p</MenuItem>
            <MenuItem value="8 yildan kop">8 yildan ko'p</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack >
        <TextField
          fullWidth
          label="Qayerda o'qigansiz"
          name="talim"
          id="talim"
          value={data.talim}
          onChange={handleChange}
          placeholder="Najot ta'lim o'quv markazi"
          variant="outlined"
          required
        />
      </Stack>

      <Stack >
        <TextField
          fullWidth
          label="Qaysi tillarni bilasiz"
          name="til"
          id="til"
          value={data.til}
          onChange={handleChange}
          placeholder="Rus tili, Ingliz tili, Koreys tili"
          variant="outlined"
          required
        />
      </Stack>
    </Stack>
  );
}

export default Step4;
