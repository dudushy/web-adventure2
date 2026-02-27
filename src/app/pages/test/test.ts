import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test implements OnInit, OnDestroy {
  title = 'Test';

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
