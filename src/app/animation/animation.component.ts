import { Component } from '@angular/core';
import { trigger, animate, style, state, transition, keyframes } from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('wideNarrow', [
      state('wide', style({
        width: '400px'
      })),
      state('narrow', style({
        width: '280px'
      })),
      transition('wide => narrow', [animate('1s')]),
      transition('narrow => wide', [animate('1s')])

    ]),

    trigger('background', [
      state('noBackground', style({
        backgroundColor: '#ffffff'
      })),
      state('withBackground', style({
        background: '#d45050'
      })),
      transition('noBackground => withBackground', [
        animate(
          '1s',
          keyframes([
            style({ backgroundColor: '#ffffff', offset: '0' }),
            style({ backgroundColor: '#e3b1b1', offset: '0.5' }),
            style({ backgroundColor: '#d45050', offset: '1' }),
          ])
        )
      ]),
      transition('withBackground => noBackground', [animate(
        '1s',
        keyframes([
          style({ backgroundColor: '#d45050'}),
          style({ backgroundColor: '#e3b1b1' }),
          style({ backgroundColor: '#ffffff' }),
        ])
        )])
    ]),

    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('1s' ,style({opacity: 0}))
      ])
    ])


  ]
})
export class AnimationComponent {

  isWide = false;
  isBackground = false;
  isVisible = true;

  toogleNormalAnimation() {
    this.isWide = !this.isWide;
  }

  toogleBackgroundAnimation() {
    this.isBackground = !this.isBackground;
  }

  toggleVisibleAnimation(){
    this.isVisible = !this.isVisible;
  }

}
