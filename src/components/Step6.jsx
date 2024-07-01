// about: "",
// qoshimcha: "",

function Step6({handleChange, data}) {
    return (
        <div>
        <div className="">
      <label htmlFor="about">O'zingiz haqingizda yozing</label>
      <textarea type="text"
        name="about"
        id="about"
        value={data.about}
        placeholder="About"
        onChange={handleChange}> O'zingiz haqingizda yozing</textarea>
     
    </div>
    <div className="">
      <label htmlFor="qoshimcha">Qoshimcha</label>
      <textarea  type="text"
        name="qoshimcha"
        id="qoshimcha"
        value={data.qoshimcha}
        placeholder="Qoshimcha"
        onChange={handleChange}> Qoshimcha</textarea>
   
    </div>
        
    </div>
    );
}

export default Step6;