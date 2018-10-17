import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatProgressBarModule, MatStepperModule, MatInputModule} from '@angular/material';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FinishDialogComponent } from './finish-dialog/finish-dialog.component';
import { ConnexionService } from './connexion.service/connexion.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FinishDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
      MatStepperModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [ConnexionService],
  entryComponents: [FinishDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
