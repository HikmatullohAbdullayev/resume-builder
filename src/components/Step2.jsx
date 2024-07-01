

function Step2({handleChange, data}) {
    return (
        <div>
            <div className="">
          <label htmlFor="yosh">Yoshingiz</label>
          <input
            type="text"
            name="yosh"
            id="yosh"
            value={data.yosh}
            onChange={handleChange}
            placeholder="Masalan: 20"
          />
        </div>
        <div>
      <div className="">
        <label htmlFor="ayol">Ayol</label>
        <input
          type="radio"
          name="jinsi"
          id="ayol"
          value="Ayol"
          checked={data.jinsi === "Ayol"}
          onChange={handleChange}
        />
        <label htmlFor="erkak">Erkak</label>
        <input
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
          <label htmlFor="telefon">Telefon raqami</label>
          <input
            type="text"
            name="telefon"
            id="telefon"
            value={data.telefon}
            onChange={handleChange}
            placeholder="Masalan: + 998 93 123 45 67"
          />
        </div>
            
        </div>
    );
}

export default Step2;