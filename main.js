window.addEventListener('DOMContentLoaded', function(){
  // console.log(document.form[1].category)
  let form = document.forms[1]
  form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log({
      date: form.date.value,
      category: form.category.value,
      description: form.description.value,
      amount: form.amount.value
    })
    form.reset()
  })
})