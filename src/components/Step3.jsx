import { Stack, TextField,  } from "@mui/material";

function Step3({handleChange, data}) {
    return (
        <Stack gap="20px">
            <Stack className="">
          <TextField 
          type="text"
            name="kasbi"
            id="kasbi"
            value={data.kasbi}
            onChange={handleChange} label="Kasbi"
            placeholder="Masalan: Frontend dasturchi" required />
         
        </Stack>
            <Stack className="">
          <TextField
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange} label="Email"
            placeholder="Masalan: example@gmail.com" required
          />
        </Stack>
        <Stack className="">
          <TextField
            type="text"
            name="linkedin"
            id="linkedin"
            value={data.linkedin}
            onChange={handleChange} label="Linkedin"
            placeholder="URl manzil qoldiring" required
          />
        </Stack>
      
        <Stack className="">
          <TextField
            type="text"
            name="telegram"
            id="telegram"
            value={data.telegram}
            onChange={handleChange} label="Telegram"
            placeholder="Masalan: @Falonchi" required
          />
        </Stack>
            
        </Stack>
    );
}

export default Step3;