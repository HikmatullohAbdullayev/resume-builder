

function Step3({handleChange, data}) {
    return (
        <div>
            <div className="">
          <label htmlFor="kasbi">Kasb</label>
          <input
            type="text"
            name="kasbi"
            id="kasbi"
            value={data.kasbi}
            onChange={handleChange}
            placeholder="Masalan: Frontend dasturchi"
          />
        </div>
            <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Masalan: example@gmail.com"
          />
        </div>
        <div className="">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            value={data.linkedin}
            onChange={handleChange}
            placeholder="URl manzil qoldiring"
          />
        </div>
      
        <div className="">
          <label htmlFor="telegram">telegram</label>
          <input
            type="text"
            name="telegram"
            id="telegram"
            value={data.telegram}
            onChange={handleChange}
            placeholder="Masalan: @Falonchi"
          />
        </div>
            
        </div>
    );
}

export default Step3;