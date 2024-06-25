import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Credit Card Encryption App';

  constructor(private http: HttpClient) {}

  onCreditCardAdded(payload: any) {
    // Make the backend API call here
    this.http.post('https://your-backend-endpoint.com/api/credit-cards', payload)
      .subscribe(response => {
        console.log('Card added successfully', response);
      }, error => {
        console.error('Error adding card', error);
      });
  }
}
