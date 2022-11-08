import './App.css';
import { useState } from 'react';

function App() {

const [inputarr, setInputArr] = useState([])

const [inputdata, SetInputData] = useState({name: "", number: ""})

function handleChange(e){

  SetInputData({
    ...inputdata,
    [e.target.name]:e.target.value,
  })
}

let {name, number} = inputdata;
function handlChange(){
  setInputArr([...inputarr,{name, number}])

  console.log(inputdata, "data we entered")
  SetInputData({name:"", number: ""})
}

function handlChange2(){
  console.log("Object Stored in Array",inputarr)
}
  

  return (
    <div className="flex flex-col w-screen h-screen relative justify-center">
        <div className='w-screen bg-white h-[10%]'></div>
        <div className='w-screen h-fit flex justify-center pt-10'>

            <div className='form-group'>
            <label htmlFor="" className='control-label'>Contact Name</label>
            <input type="text" className='form-control' autoComplete='off' name='name'
            value={inputdata.name}
            onChange={handleChange}
            />
            </div>

            <div className='form-group'>
            <label htmlFor="" className='control-label'>Contact Name</label>
            <input type="number" className='form-control' autoComplete='off' name='number'
            value={inputdata.number}
            onChange={handleChange}/>
            </div>


            <div className='btn-group'>
            <button type='submit' className='btn btn-primary' onClick={handlChange}>Submit</button>
            <button className='btn btn-danger' onClick={handlChange2}>See Result</button>
            </div>

        </div>


        <div className='w-[70vw] h-fit m-auto'>
          <table cellPadding={10} width="100%" className='border-[1px] border-black rounded-lg'>
            <tr>
              <td className='border-[1px] border-black bg-slate-300 '>Name</td>
              <td className='border-[1px] border-black bg-slate-300'>Phone Number</td>
            </tr>
            {
              inputarr.map((info, index)=>{
                return(
                  <tr>
                    <td className='border-[1px] border-black'>{info.name}</td>
                    <td className='border-[1px] border-black'>{info.number}</td>
                  </tr>
                )
              })
            }


          </table>
        </div>
    </div>
  );
}

export default App;
