const ul = document.querySelector('ul')
const input =document.querySelector('input')
const form= document.querySelector("form")

export function checkedTask(){
    ul.addEventListener('click',(e)=>{
        const divElement=e.target.parentNode
        const liElement=divElement.parentNode
        liElement.classList.toggle('check')
    })
}

export function addNewTask(){
        form.addEventListener("submit",function(e){
        e.preventDefault()
        console.log(input.value)
        const taks= input.value
        const newLi= document.createElement('li')
        newLi.innerHTML=`
        <div class="wraper-text">
            <div class="check-icon"></div>
                <p>${taks}</p>
            </div>
            <div class="remove-icon"></div>` 
        ul.prepend(newLi)
        input.value=''
        console.log(ul.firstChild)
    })
    
}

export function removeTask(){
    ul.addEventListener('click',(e)=>{
       const liTargetRemove=e.target.parentNode
        ul.removeChild(liTargetRemove)
    })
}
