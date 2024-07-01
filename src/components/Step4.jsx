

function Step4({handleChange, data}) {
    return (
        <div>
            <div className="">
          <label htmlFor="skills">Ko'nikmalaringiz</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={data.skills}
            onChange={handleChange}
            placeholder="Masalan: HTML,CSS,JS,...."
          />
        </div>
            <div className="">
          <label htmlFor="tajribasi">Tajribangiz</label>
     
          <select name="tajribasi"
            id="tajribasi"
            value={data.tajribasi}
            onChange={handleChange}
            placeholder="Masalan: 1 yil">
            <option value="1 yildan kam">1 yildan kam</option>
            <option value="1 yildan kop">1 yildan ko'p</option>
            <option value="2 yildan kop">2 yildan ko'p</option>
            <option value="5 yildan kop">5 yildan ko'p</option>
            <option value="8 yildan kop">8 yildan ko'p</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="talim">Qayerda o'qigansiz</label>
          <input
            type="text"
            name="talim"
            id="talim"
            value={data.talim}
            onChange={handleChange}
            placeholder="Najot ta'lim o'quv markazi"
          />
        </div>
      
        <div className="">
          <label htmlFor="til">Qaysi tillarni bilasiz</label>
          <input
            type="text"
            name="til"
            id="til"
            value={data.til}
            onChange={handleChange}
            placeholder="Rus tili, Ingliz tili, Koreys tili"
          />
        </div>
            
        </div>
    );
}

export default Step4;