import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { App } from '../../app';

@Component({
  selector: 'app-home',
  imports: [KeyValuePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  title = 'Home';

  constructor(
    private cdr: ChangeDetectorRef,
    public app: App
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  async redirectTo(url: any) {
    await this.app.redirectTo(url, this.title);

    this.updateView();
  }
}
