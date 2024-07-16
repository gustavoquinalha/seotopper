import { Component, EventEmitter, Output, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { MetadataService } from 'src/app/metadata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() onFetchValue = new EventEmitter<string>();
  url: string = 'https://gus.vision/';
  loading = signal(false);

  constructor(private metadataService: MetadataService) { }
  fetchMetadata() {
    this.loading.set(true);
    this.metadataService.fetchMetadata(this.url).pipe(
      tap(value => {
        this.onFetchValue.emit(value.data)
      }),
      catchError(error => {
        return of(null);
      }),
      finalize(() => {
        this.loading.set(false);
      })
    ).subscribe();
  }
}
