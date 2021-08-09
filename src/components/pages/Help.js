import React from 'react';
import { useState } from 'react';
import PageLayout from '../common/layouts/pages/PageLayout';

function Help() {
    const [data,setData]=useState();

    function getData(val){
        setData(val.target.value)
        // console.warn(data)
        
        
    }

    let inputbox= data;
  let idd = JSON.parse(localStorage.getItem("user")).id;

    const [question, setQuestion] = useState(inputbox);
    const [userid, setUserid] = useState(idd);
        console.warn(data)
        console.warn(inputbox)

        console.warn(question)

        console.warn(userid)

        async function userquery() {

            const formData = new FormData();
            formData.append('userid', userid);
            formData.append('question', inputbox);
           
            let result = await fetch("http://localhost:8000/api/userquery/", {
        
              method: 'POST',
              body: formData,
            });
        
          }

  return (
    <PageLayout>
    <div>

      <h1 className='text-center'>Need help?</h1>
        <div className='text-center'>
        <input  type="text" onChange={getData} />
        <br></br>
        <br></br>
        <button onClick={userquery}>Send Query</button>
        </div>
    </div>

     </PageLayout> 
  );
}

export default Help;
