import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'spa';
  response;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.devquiz.com.br/api').subscribe(
      data => this.response = JSON.stringify(data),
      error => this.response = error.message + "\n\n" + JSON.stringify(error.error)
    )
  }
}
