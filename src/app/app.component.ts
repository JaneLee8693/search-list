import { Component } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  dept: string;
  salary: number;
  doj: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
  ];

  searchTerm: string = '';
}
