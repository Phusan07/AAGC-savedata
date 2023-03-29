<script>

  function preventFormSubmit(){
    var forms=document.querySelectorAll('form');
    for (var i=0;i<forms.length;i++){
      forms[i].addEventListener('submit',function(event){
        event.preventDefault();
      });
    }
  }
window.addEventListener('load',preventFormSubmit);

function handleFormSubmit(formObject){
  google.script.run.processForm(formObject);
  window.open("https://player.flipsnack.com?hash=QzY4RkY4RUVGQjUreGs4NDk1a3Z4bg==", '_blank');
  document.getElementById("myForm").reset();
}


</script>
