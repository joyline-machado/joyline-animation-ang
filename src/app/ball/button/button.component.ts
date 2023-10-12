import { Component } from '@angular/core';
import { BallComponent } from '../ball.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(private ballComponent: BallComponent) {}

  toggleAnimation() {
    this.ballComponent.toggleAnimation();
  }

}
