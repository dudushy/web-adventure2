import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVidUi } from './yt-vid-ui';

describe('YtVidUi', () => {
  let component: YtVidUi;
  let fixture: ComponentFixture<YtVidUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtVidUi],
    }).compileComponents();

    fixture = TestBed.createComponent(YtVidUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
