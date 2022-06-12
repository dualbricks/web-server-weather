console.log('Client side JS loaded')



const weatherForm = document.querySelector('form')
var query = new Date().toISOString()
query = query.slice(0,-5)

weatherForm.addEventListener('submit', (e)=>{
    console.log(query)
    e.preventDefault()
    fetch('http://localhost:3000/weather?time='+ query).then((response)=> {
        response.json().then( (data)=> {
            const weather = document.querySelector('#weather')
            weather.textContent = 'The Air Temperature in Singapore now is around ' + data.value + ' Degrees Celsius'
        })
    })
})

clickTime = () =>{
    const messageOne = document.querySelector('#time')
    const time = new Date()
    messageOne.textContent = time;
}