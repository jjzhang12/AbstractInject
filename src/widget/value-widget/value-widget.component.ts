import { Component } from '@angular/core';
import { DataSubscription, RuntimeData } from '../../sdk/data-service.service';


@Component({
  selector: 'app-value-widget',
  standalone: true,
  imports: [],
  templateUrl: './value-widget.component.html',
  styleUrl: './value-widget.component.scss'
})
export class ValueWidgetComponent {
  constructor(private runtimeData : RuntimeData) {

    // In Widget, we only inject the abstract base class RuntimeData, has no knowledge of MyRuntimeDataService
    this.runtimeData.createSubscription();
  }
}
