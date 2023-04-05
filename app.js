
async function logJSONData() {
    const response = 
    await fetch("http://localhost:3000/drinks");
    const jsonData = await response.json();
    return jsonData
  }
 
  displayImages()
  async function displayImages(){
    const container= document.getElementById('container')
    const data = await logJSONData()
        console.log(data);
    data.forEach((drink)=>{
        let html=`
        <div class="content">
        <img src="${drink.strDrinkThumb}" alt="">
        <div class="links">
        <p>${drink.likes}</p>
        <button onclick="updateLikes(${drink.id}, ${drink.likes})">Like</button>
      </div>
       </div>
        `
        container.innerHTML += html
    })

  }

  async function updateLikes(id,likes){
    await fetch(`http://localhost:3000/drinks/${id}`, 
    {
        method: "PATCH",
        body: JSON.stringify({likes:likes+1}),
        headers: {
            "Content-Type": "application/json",
          },
    })
  }