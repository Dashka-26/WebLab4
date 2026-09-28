/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {

  /* Header navigation */

  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Allow default behavior for navigation across pages, but smooth scroll for hash links
      if (item.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        var section = document.querySelector(item.getAttribute('href'));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* Sign-up flow */

  function startSignup() {
    var trial = document.getElementById('trial');
    if (trial) {
      trial.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html#trial';
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', startSignup);
  }

  /* Trial form */

  var trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = trialForm.querySelector('input[name="email"]');

      if (!email.value) {
        email.style.boxShadow = '0 0 0 2px #fca5a5';
        email.setAttribute('aria-invalid', 'true');

        var errorMsg = document.getElementById('email-error');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.id = 'email-error';
          errorMsg.style.color = '#ef4444';
          errorMsg.style.width = '100%';
          errorMsg.style.marginTop = '8px';
          errorMsg.textContent = 'Error: Please provide a valid work email.';
          trialForm.appendChild(errorMsg);
          email.setAttribute('aria-describedby', 'email-error');
        }
        return;
      }

      email.removeAttribute('aria-invalid');
      trialForm.innerHTML = '<p>Thanks — check your inbox, the workspace is being created.</p>';
    });
  }

  /* FAQ accordion */

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      var isOpen = question.parentElement.classList.toggle('is-open');
      question.setAttribute('aria-expanded', isOpen);
    });
  });

  /* Seasonal promo bar (Fixed CLS: inserted synchronously on load instead of delayed) */

  window.addEventListener('load', function () {
    var promo = document.createElement('div');
    promo.className = 'promo';
    promo.innerHTML = '<strong>Autumn offer</strong> 3 months of Pro for the price of one. <a href="#pricing">See plans</a>';
    document.body.insertBefore(promo, document.body.firstChild);
  });

});
