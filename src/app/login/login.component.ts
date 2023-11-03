import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private router: Router){}
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.router.navigate(['/posthome']);
    }
 
}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}
