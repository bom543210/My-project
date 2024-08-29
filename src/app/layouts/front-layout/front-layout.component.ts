import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AppComponent,FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
