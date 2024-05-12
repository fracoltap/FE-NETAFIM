import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  form: FormGroup
  loading: boolean = false;

  constructor(private fb:FormBuilder) { 
     this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isActive: ['', Validators.required],
      emailConfirmed: ['', Validators.required]
     })
    
  }

  ngOnInit(): void {
  }

  goBack() {
  }
}
