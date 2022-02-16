import { AbstractControl, FormArray, FormControl } from '@angular/forms';

export class FormValidations {

    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: AbstractControl) => {
            if (formArray instanceof FormArray) {
                const totalChecked = formArray.controls.map(v => v.value)
                    .reduce((prev, next) => (next ? prev + next : prev), 0);
                return totalChecked >= min ? null : { required: true };
            }
            throw new Error('formArray is not an instance of FormArray');
        }
        return validator;
    }

    static cepValidator(control: FormControl){
        const cep = control.value;
        if (cep && cep !== ''){
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido: true };
        }
        return null;
    }
} 