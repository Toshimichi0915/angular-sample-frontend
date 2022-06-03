import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend';

  customer = {
    email: null,
    username: null
  }

  async onSubmit() {
    if (this.customer.email == null) return
    if (this.customer.username == null) return

    const response = await fetch("/api/customers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.customer)
    })

    if(!response.ok) {
      console.error(`Response Error: ${response.status} ${response.statusText}`)
    }
  }
}
