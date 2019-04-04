import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.get('password');

        if (passControl) {
            const passValue = passControl.value;
            if (passValue! == cnfpassValue) {
                return {
                    isError: true,
                };
            }
        }
    }
    return null;
}