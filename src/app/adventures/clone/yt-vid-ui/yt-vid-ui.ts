import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { App } from '../../../app';

@Component({
  selector: 'app-yt-vid-ui',
  imports: [],
  templateUrl: './yt-vid-ui.html',
  styleUrl: './yt-vid-ui.scss',
})
export class YtVidUi implements OnInit, OnDestroy {
  title = 'YtVidUi';

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
