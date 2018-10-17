import {Component, OnInit} from '@angular/core';
import {User} from './user/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FinishDialogComponent} from './finish-dialog/finish-dialog.component';
import {MatDialog} from '@angular/material';
import {ConnexionService} from './connexion.service/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  first_step_active = true;
  user: User;
    registerForm: FormGroup;
    submitted = false;
    hide = true;
    loading = false;
    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private cnxService: ConnexionService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    return_button() {
    this.first_step_active = true;
  }
    onScroll(terms, check) {
        if (terms.scrollTop + terms.offsetHeight + 2 >= terms.scrollHeight) {
            check.removeAttribute('disabled');
        }
    }
    onValid(check) {
        this.user = new User();
        this.user.email = this.registerForm.controls['email'].value;
        this.user.password = this.registerForm.controls['password'].value;
        if (check.checked) {
            this.loading = true;
            this.cnxService.createConnexion(this.user).subscribe(
                result => {
                    this.showAlert('Opération terminée.', 'Votre connexion est terminée avec succès.');
                    this.loading = false;
                },
                error => {
                    this.showAlert('Opération échouée.', 'Connexion non valide, erreur serveur.');
                    this.loading = false;
                });
        } else {
            this.showAlert('Action non valide.', 'Lire et accepter les termes pour terminer');
        }
    }
    showAlert(title: string, description: string) {
        const dialogRef = this.dialog.open(FinishDialogComponent, {
            data: {
                'title': title,
                'description': description
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
        });
    }
}
