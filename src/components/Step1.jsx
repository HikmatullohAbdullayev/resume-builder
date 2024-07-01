

function Step1({handleChange, data}) {
    return (
        <div>
            <div className="">
          <label htmlFor="name">Ism</label>
          <input
            type="text"
            name="ism"
            id="name"
            value={data.ism}
            placeholder="Ismingiz"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="familya">Familya</label>
          <input
            type="text"
            name="familya"
            id="familya"
            value={data.familya}
            placeholder="Familyangiz"
            onChange={handleChange}
          />
        </div>
            
        </div>
    );
}

export default Step1;