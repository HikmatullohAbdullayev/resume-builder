import { Stack, TextField, styled } from "@mui/material";


const WidthDiv = styled(Stack)(({ theme }) => ({
    
    // maxWidth:"400px",
    // border:"none",
    // outline:"none",
    // borderRadius:"0px",

   
  }));
function Step1({handleChange, data}) {
    return (
          <Stack gap="20px"  >

      <WidthDiv    >

            <TextField  type="text"  
            name="ism" 
            id="ism" 
            value={data.ism}
            placeholder="Ismingiz"
            onChange={handleChange} 
            label="Ism"  size="small"
            fullWidth 
            variant="outlined" required />
            
        
            </WidthDiv>
        <Stack >
        <TextField   type="text"
            name="familya"
            id="familya"
            value={data.familya}
            placeholder="Familyangiz"  size="small"
            onChange={handleChange} label="Familya" variant="outlined"  required/>
         
        </Stack>
            
          </Stack>
    );
}

export default Step1;