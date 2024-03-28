import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import Button from './svelte-components/dist/Button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private svelteButton: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
      this.svelteButton = new Button({
          target: this.elementRef.nativeElement.querySelector('#svelte-button-container'),
          props: {
              title: 'Ma props depuis Angular!',
              onClick: () => alert('Mon clouck depuis Angular!'),
          },
      });
  }

  ngOnDestroy(): void {
      if (this.svelteButton) {
          this.svelteButton.$destroy();
      }
  }
}
