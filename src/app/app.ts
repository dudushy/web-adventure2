import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Db } from './services/db/db';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  PROJECT_NAME = 'Web Adventure 2';
  PROJECT_DIR = 'web-adventure2';

  title = 'App';

  allPages: any = [];
  currentPage: any = null;

  theme = 'dark';
  hasScrollbar = false;

  constructor(
    public db: Db,
    public router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    console.log(`[${this.title}#constructor]`);

    const rawAllPages = this.router.config;
    console.log(`[${this.title}#constructor] rawAllPages`, rawAllPages);

    this.allPages = rawAllPages.filter((page: any) => {
      return (
        page.path !== '' &&
        page.path !== '**' &&
        page.path !== 'home' &&
        page.path !== 'test' &&
        page.path !== 'not-found'
      );
    });

    console.log(`[${this.title}#constructor] allPages`, this.allPages);

    this.theme = this.db.getLocal('theme') || 'dark';
    this.toggleTheme(this.theme);

    window.onresize = () => {
      console.log(`[${this.title}#window.onresize]`);

      this.detectScrollbar();
    };

    window.onload = () => {
      console.log(`[${this.title}#window.onload]`);

      const url = this.router.url.replace('/', '');
      console.log(`[${this.title}#window.onload] url`, url);

      this.updateUrl(url);

      this.loadLastScrollPosition();

      this.detectScrollbar();
    };

    window.onbeforeunload = (e) => {
      console.log(`[${this.title}#window.onbeforeunload] e`, e);

      this.saveLastScrollPosition();
    };
  }

  updateView(from: string) {
    console.log(`[${this.title}#updateView] from`, from);
    this.cdr.detectChanges;
  }

  async redirectTo(url: any, from: any) {
    console.log(`[${this.title}#redirectTo] ${from} | url`, url);

    await this.router.navigateByUrl(`/${url}`);

    this.updateUrl(url);
  }

  updateUrl(url: any) {
    console.log(`[${this.title}#updateUrl] url`, url);

    this.currentPage = url;
    this.db.setLocal('last_page', url);
    console.log(`[${this.title}#redirectTo] last_page`, this.db.getLocal('last_page'));

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#redirectTo] appRoot`, appRoot);

    if (!appRoot) return;

    appRoot.scrollTop = 0;
  }

  defaultOrder() { return 0; }

  openLink(url: any) { window.open(url, '_blank'); }

  toggleTheme(theme: any) {
    console.log(`[${this.title}#toggleTheme] theme`, theme);

    this.theme = theme;
    this.db.setLocal('theme', theme);

    document.documentElement.setAttribute('theme', theme);
    document.documentElement.style.setProperty('--theme', theme);

    this.updateView(this.title);
  }

  detectScrollbar() {
    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#detectScrollbar] appRoot`, appRoot);

    if (!appRoot) return;
    this.hasScrollbar = appRoot.scrollHeight > appRoot.clientHeight;
    console.log(`[${this.title}#detectScrollbar] hasScrollbar`, this.hasScrollbar);
  }

  saveLastScrollPosition() {
    console.log(`[${this.title}#saveLastScrollPosition]`);

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#saveLastScrollPosition] appRoot`, appRoot);

    if (!appRoot) return;

    const main = appRoot.firstChild as HTMLElement;
    console.log(`[${this.title}#saveLastScrollPosition] main`, main);

    const url = this.router.url.replace('/', '');
    console.log(`[${this.title}#saveLastScrollPosition] url`, url);

    // this.db.setLocal(`lastScrollPosition-${url}`, main.scrollTop);
    // console.log(`[${this.title}#saveLastScrollPosition] lastScrollPosition`, this.db.getLocal(`lastScrollPosition-${url}`));
    this.db.setSession(`lastScrollPosition-${url}`, main.scrollTop);
    console.log(`[${this.title}#saveLastScrollPosition] lastScrollPosition`, this.db.getSession(`lastScrollPosition-${url}`));
  }

  loadLastScrollPosition() {
    console.log(`[${this.title}#loadLastScrollPosition]`);

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#loadLastScrollPosition] appRoot`, appRoot);

    if (!appRoot) return;

    const main = appRoot.firstChild as HTMLElement;
    console.log(`[${this.title}#loadLastScrollPosition] main`, main);

    const url = this.router.url.replace('/', '');
    console.log(`[${this.title}#saveLastScrollPosition] url`, url);

    // const lastScrollPosition = this.db.getLocal(`lastScrollPosition-${url}`);
    const lastScrollPosition = this.db.getSession(`lastScrollPosition-${url}`);
    console.log(`[${this.title}#loadLastScrollPosition] lastScrollPosition`, lastScrollPosition);

    if (lastScrollPosition) {
      main.scrollTop = lastScrollPosition;
    }
  }
}
