import { Stack, TextField, RadioGroup, Radio } from "@mui/material";
// import { InputMask } from '@react-input/mask';
function Step2({handleChange, data}) {
    return (
        <div>
            <div className="">
              <TextField  type="number"
            name="yosh"
            id="yosh"
            value={data.yosh}
            onChange={handleChange} required
            placeholder="Masalan: 20"  label="Yosh" variant="outlined" />
          
        </div>
        <div>

      <div className="">
        <label htmlFor="ayol">Ayol</label>
        <Radio required
          type="radio"
          name="jinsi"
          id="ayol"
          value="Ayol"
          checked={data.jinsi === "Ayol"}
          onChange={handleChange}
        />
        <label htmlFor="erkak">Erkak</label>
        <Radio required
          type="radio"
          name="jinsi"
          id="erkak"
          value="Erkak"
          checked={data.jinsi === "Erkak"}
          onChange={handleChange}
        />
      </div>
    </div>
        <div className="">
          <TextField
           type="number"
            name="telefon"
            id="telefon"
            value={data.telefon}
            onChange={handleChange}
            placeholder="Masalan: + 998 93 123 45 67"
             label="Telefon" variant="outlined"
             required
          />
        </div>
            
        </div>
    );
}

export default Step2;