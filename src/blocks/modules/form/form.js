/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import IMask from 'imask';
import Fade from '../popup/popup';

class Form {
    constructor(el) {
        this.flag = false;
        this.validate = false;
        this.files = [];

        const form = el;
        this.initForm(form);
    }

    validation(inputs) {
        let inputNameCheck = false;
        let inputTelCheck = false;
        let inputEmailCheck = false;
        let inputPasswordCheck = false;

        if (inputs.name) {
            if (
                inputs.name.value.length < 2 ||
                inputs.name.value === null ||
                inputs.name.value === ''
            ) {
                inputs.name.parentNode.classList.remove('success');
                inputs.name.parentNode.classList.add('error');
                inputNameCheck = true;
            } else {
                inputs.name.parentNode.classList.remove('error');
                inputs.name.parentNode.classList.add('success');
                inputNameCheck = false;
            }
        }
        if (inputs.tel) {
            if (
                inputs.tel.value.length < 10 ||
                inputs.tel.value === null ||
                inputs.tel.value === ''
            ) {
                inputs.tel.parentNode.classList.remove('success');
                inputs.tel.parentNode.classList.add('error');
                inputTelCheck = true;
            } else {
                inputs.tel.parentNode.classList.remove('error');
                inputs.tel.parentNode.classList.add('success');
                inputTelCheck = false;
            }
        }

        if (inputs.email) {
            if (
                inputs.email.value.length < 5 ||
                inputs.email.value === null ||
                inputs.email.value === ''
            ) {
                inputs.email.parentNode.classList.remove('success');
                inputs.email.parentNode.classList.add('error');
                inputEmailCheck = true;
            } else {
                inputs.email.parentNode.classList.remove('error');
                inputs.email.parentNode.classList.add('success');
                inputEmailCheck = false;
            }
        }

        if (inputs.password) {
            if (
                inputs.password.value === null ||
                inputs.password.value === ''
            ) {
                inputs.password.parentNode.classList.add('error');
                inputPasswordCheck = true;
            } else {
                inputs.password.parentNode.classList.remove('error');
                inputPasswordCheck = false;
            }
        }

        if (
            inputNameCheck ||
            inputTelCheck ||
            inputEmailCheck ||
            inputPasswordCheck
        ) {
            return false;
        }
        return true;
    }

    validationOnChange(inputs) {
        if (inputs.name) {
            inputs.name.addEventListener('input', () => {
                if (
                    inputs.name.value.length > 1 &&
                    (inputs.name.value !== null || inputs.name.value !== '')
                ) {
                    inputs.name.parentNode.classList.remove('error');
                    inputs.name.parentNode.classList.add('success');
                } else {
                    inputs.name.parentNode.classList.remove('success');
                    inputs.name.parentNode.classList.add('error');
                }
            });
        }

        if (inputs.email) {
            inputs.email.addEventListener('input', () => {
                if (
                    inputs.email.value.length > 4 &&
                    (inputs.email.value !== null || inputs.email.value !== '')
                ) {
                    inputs.email.parentNode.classList.remove('error');
                    inputs.email.parentNode.classList.add('success');
                } else {
                    inputs.email.parentNode.classList.remove('success');
                    inputs.email.parentNode.classList.add('error');
                }
            });
        }

        if (inputs.password) {
            inputs.password.addEventListener('input', () => {
                if (
                    inputs.password.value.length > 5 &&
                    (inputs.password.value !== null ||
                        inputs.password.value !== '')
                ) {
                    inputs.password.parentNode.classList.remove('error');
                    inputs.password.parentNode.classList.add('success');
                } else {
                    inputs.password.parentNode.classList.remove('success');
                    inputs.password.parentNode.classList.add('error');
                }
            });
        }
    }

    // uploadFiles(form) {
    //     const input = form.querySelector(
    //         '.custom-inputfile .custom-inputfile__input'
    //     );
    //     const list = form.querySelector(
    //         '.custom-inputfile .custom-inputfile__list'
    //     );
    //     const label = form.querySelector(
    //         '.custom-inputfile .custom-inputfile__label'
    //     );

    //     const newFileList = Array.from(input.files);
    //     this.files = newFileList;

    //     while (list.hasChildNodes()) {
    //         list.removeChild(list.firstChild);
    //     }

    //     for (let x = 0; x < input.files.length; x++) {
    //         const li = document.createElement('li');
    //         li.innerHTML = `<span class="custom-inputfile__list-file"><i class="icon icon-file"></i></span>${input.files[x].name}<span class="custom-inputfile__list-delete"><i class="icon icon-close"></i></span>`;
    //         list.append(li);
    //         label.style.display = 'none';

    //         const buttonDelete = li.querySelector(
    //             '.custom-inputfile__list-delete'
    //         );
    //         buttonDelete.onclick = function() {
    //             newFileList.splice(x, 1);
    //             this.parentNode.remove();
    //             this.files = newFileList;
    //             label.style.display = 'inline-flex';
    //         };
    //     }
    // }

    send(form) {
        const formData = new FormData(form);

        if (this.files.length > 0) {
            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                formData.append('files[]', file);
            }
        }

        const action = form.getAttribute('action');
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                if (xmlhttp.status === 200) {
                    const consultationPopup = new Fade('.popup--consultation');
                    const popupSuccess = new Fade('.popup--success');

                    console.log('HTTPRequest done!');
                    consultationPopup.fadeOut(250);
                    popupSuccess.fadeIn(350, 'flex');
                }
            }
        };

        xmlhttp.open('POST', action, true);

        xmlhttp.send(formData);
    }

    initForm(form) {
        const $this = this;
        const button = form.querySelector('.button');
        const bot = form.querySelector('input[name="bot"]');
        const inputFile = form.querySelector(
            '.custom-inputfile #sentence-file'
        );
        const inputs = {
            name: form.querySelector('input[type="text"]'),
            email: form.querySelector('input[type="email"]'),
            tel: form.querySelector('input[type="tel"]'),
            password: form.querySelector('input[type="password"]'),
        };

        button.addEventListener('click', e => {
            e.preventDefault();
            const validate = $this.validation(inputs);
            if (validate) {
                if (bot) {
                    bot.value = 'checked';
                }
                $this.send(form);
            }
            $this.validationOnChange(inputs);
        });

        if (inputFile) {
            inputFile.addEventListener('change', function() {
                $this.uploadFiles(form);
            });
        }
    }
}

const loginForm = document.querySelector('.popup--user form');
new Form(loginForm);

const registerForm = document.querySelector('.popup--user-register form');
new Form(registerForm);

const consultationForm = document.querySelector('.popup--consultation form');
new Form(consultationForm);

const partnerForm = document.querySelector('.popup--partners form');
new Form(partnerForm);

const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    const phoneMask = IMask(input, {
        mask: [
            {
                mask: '+{7} (000) 000-00-00',
                startsWith: '7',
                lazy: false,
                country: 'Russia',
            },
            {
                mask: '0 (000) 000-00-00',
                startsWith: '8',
                country: 'unknown',
            },
        ],
        dispatch(appended, dynamicMasked) {
            const number = (dynamicMasked.value + appended).replace(/\D/g, '');
            return dynamicMasked.compiledMasks.find(m => {
                return number.indexOf(m.startsWith) === 0;
            });
        },
    });
    phoneMask.on('complete', () => {
        if (!!phoneMask === true) {
            input.parentNode.classList.remove('error');
            input.parentNode.classList.add('success');
        } else {
            input.parentNode.classList.remove('success');
            input.parentNode.classList.add('error');
        }
    });
});

const fileInputs = document.querySelectorAll('.custom-inputfile__input');

if (fileInputs) {
    Array.prototype.forEach.call(fileInputs, input => {
        const label = input.nextElementSibling;
        const labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            let fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (
                    this.getAttribute('data-multiple-caption') || ''
                ).replace('{count}', this.files.length);
            else fileName = e.target.value.split('\\').pop();

            if (fileName) label.querySelector('span').innerHTML = fileName;
            else label.innerHTML = labelVal;
        });

        input.addEventListener('focus', () => {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('has-focus');
        });
    });
}
