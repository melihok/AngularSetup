import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader.model';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public show = false;
  private subscription: Subscription | any;

  constructor(private loaderService: LoaderService) { }

  ngAfterContentInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        setTimeout(() => {
          if (this.show != state.show)
            this.show = state.show;
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
