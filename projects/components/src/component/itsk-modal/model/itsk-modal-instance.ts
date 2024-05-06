import {Subject} from 'rxjs';
import {IModalResult} from './imodal-result';
import {ComponentRef} from '@angular/core';
import {ItskModalContainerComponent} from '../itsk-modal-container/itsk-modal-container.component';
import {ItskContentRef} from '../../../common/model/itsk-content-ref';
import {ItskModalCloseReason} from "./itsk-modal-close-reason.enum";

export class ItskModalInstance {
  private onClose$: Subject<IModalResult> = new Subject<IModalResult>();
  onClose = this.onClose$.asObservable();

  constructor(private window$: ComponentRef<ItskModalContainerComponent>,
              private content$: ItskContentRef) {
    if (this.window$ && this.window$.instance) {
      this.window$.instance.closeEvent.subscribe((event: IModalResult) => {
        this.close(event);
      });
    }
  }

  get window(): ComponentRef<ItskModalContainerComponent> {
    return this.window$;
  }

  get component(): ComponentRef<any> | null {
    return this.content$.componentRef ? this.content$.componentRef : null;
  }

  close = (event?: IModalResult) => {
    this.onClose$.next(event ?? {reason: ItskModalCloseReason.Exit});
    this.onClose$.complete();
    this.destroy();
  }

  private destroy() {
    this.window$.destroy();

    if (this.content$ && this.content$.viewRef) {
      this.content$.viewRef.destroy();
    }
  }
}
