const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
  };

  const subscriptionForms = document.querySelectorAll('.needs-validation');

  subscriptionForms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      
      if (form.checkValidity()) {
        appendAlert('¡Suscripción exitosa!', 'success');
      }
      
      form.classList.add('was-validated');
    });
  });





  (() => {
    'use strict'
  
    
    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()