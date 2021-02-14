
const container = document.getElementById("accordion");
state.forEach((result) => {
  window.scrollTo(0,100);
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
  <div class="card">
      <img id="img"src="images/${result.img}" style = "width:100%";"height:70%";>
      <div class = "text-block">
          <h4>${result.title}</b></h4>
          <p>${result.description}</p>
          <a href=${result.link}> 
            <button class="st_button"> 
                Explore 
            </button> 
          </a>
      </div>
  </div>
  <br></br>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});

/*async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}*/
function create_state(ite) {
  window.location.href = "indistates/" + ite + ".html";
  //const cont_1 = document.createElement("BODY");
  //cont_1.innerHTML = await fetchHtmlAsText("states.html");
  //var cont_1 = document.getElementById('st');
  ite.forEach((result) => {
    const cont_1 = document.getElementById("st");
    //cont_1.innerHTML = '<object type="text/html" data="states.html" ></object>';
    // Create card element
    //var card = document.createElement('div');
    //card.classList = 'card-body';
    // Construct card content
    const conte = `
    <div class="card">
        <div class="card-body">
          <h4><b>${result.name}</b></h4>
          <p>${result.summ}</p>
        </div>
    </div>
    `;

    // Append newyly created card element to the container
    cont_1.innerHTML += conte;
  });
}
 function redirect_to_state(i){
   window.location.href = i;
 }