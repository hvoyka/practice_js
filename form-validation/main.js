let inputs = document.querySelectorAll('input[data-rule]');
for( let input of inputs) {
  input.addEventListener('blur', function(){
    let rule = this.dataset.rule;
    let value = this.value;
    let check;
    
      switch (rule) {
      case 'number':
          check = /^\d+$/.test(value);
        break;
      case 'email':

        break;
      case 'domain':
      
        break;
      default:
        console.log('error');
      break;
    }  
     this.classList.remove('invalid');
     this.classList.remove('valid');
    if(check) {      
      this.classList.add('valid');
    } else {     
       this.classList.add('invalid');
    }
  });
}