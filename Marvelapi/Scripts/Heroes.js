async function Fetch_Data(){
    axios.get('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Heroes')
    .then((response)=>{
      
      console.log(response.data)
  
    })
  }