const loadPhone=async(search)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res= await fetch(url)
    const data=await res.json()
    displayPhones(data.data)
}
const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.innerHTML=``;
    const showAll=document.getElementById('show-all')
    if(phones.length > 10){
    phones=phones.slice(0, 10)
    showAll.classList.remove('d-none')

    }else{
        showAll.classList.add('d-none')
    }
    

    const notFound=document.getElementById('not-found')
    if(phones.length==0){
        notFound.classList.remove('d-none')
    }else{
        notFound.classList.add('d-none')
    }
    phones.forEach(phone => {
        // console.log(phone)
        const phoneDiv=document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML=`
        <div class="card h-50">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                      <p class="card-text">Slug: ${phone.slug}</p>
                    </div>
            </div>
        `
        phoneContainer.appendChild(phoneDiv)
    });
    loadSpinner(false)
}
document.getElementById('button-search').addEventListener('click',function(){
    loadSpinner(true)
   const inputField=document.getElementById('exampleFormControlInput1')
   const inputText=inputField.value
   loadPhone(inputText)
  inputField.value='';
})

const loadSpinner=isLoad=>{
    const toggleSpinner=document.getElementById('loader')
    if(isLoad== true){
        toggleSpinner.classList.remove('d-none')
    }else{
        toggleSpinner.classList.add('d-none')
    }
}
// loadPhone('samsung')