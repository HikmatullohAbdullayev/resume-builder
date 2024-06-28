import { useState } from "react";


function App() {

  const [data, setData] = useState({
    ism: "",
    familya: "",
    yosh: "",
    jinsi: "",
    kasbi: "",
    telefon: "",
    email: "",
    about: "",
    telegram: "",
    instagram: "",
    linkedin: "",
    skills: "",
    tajribasi: "",
    talim: "",
    til: "",
    projects: [
      { name: "", link: "", info: "" },
      { name: "", link: "", info: "" },
      { name: "", link: "", info: "" },
      { name: "", link: "", info: "" }
    ],
    qoshimcha: ""
  });

const handleChange = (e) => {
    setData({...data, ism: e.target.value})
    console.log(data);
}

const submitData = () => {

}

return (
    <div>
      <form  onSubmit={submitData}>
        <div className="">
          <label htmlFor="name">Ism</label>
          <input type="text" name="name" id="name" value={data.ism}  
          onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="familya">Familya</label>
          <input type="text" name="familya" id="familya" value={data.familya} />
        </div>
      </form>
      
    </div>
  );
}

export default App;