import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal, TemplateRef, WritableSignal } from '@angular/core';
import { App } from '../../../app';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap/datepicker';

@Component({
  selector: 'app-dummy',
  imports: [NgbInputDatepicker],
  templateUrl: './dummy.html',
  styleUrl: './dummy.scss',
})
export class Dummy implements OnInit, OnDestroy {
  title = 'Dummy';

  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');

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

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
