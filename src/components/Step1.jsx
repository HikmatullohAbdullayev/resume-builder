import { Stack, TextField } from "@mui/material";


function Step1({handleChange, data}) {
    return (
          <Stack gap="20px">

      <Stack>

            <TextField  type="text"
            name="ism"
            id="ism"
            value={data.ism}
            placeholder="Ismingiz"
            onChange={handleChange} label="Ism" variant="outlined" required />
            
        
            </Stack>
        <Stack >
        <TextField   type="text"
            name="familya"
            id="familya"
            value={data.familya}
            placeholder="Familyangiz"
            onChange={handleChange} label="Familya" variant="outlined"  required/>
         
        </Stack>
            
          </Stack>
    );
}

export default Step1;