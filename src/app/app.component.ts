import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueWidgetComponent } from '../widget/value-widget/value-widget.component';
import { MyRuntimeDataService } from './service/my-runtime-data.service';
import { RuntimeData } from '../sdk/data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValueWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: RuntimeData, useClass: MyRuntimeDataService}],
})
export class AppComponent {
  title = 'AbstractInject';
}
