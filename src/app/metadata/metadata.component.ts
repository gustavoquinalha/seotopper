import { Component } from '@angular/core';
import { MetadataService } from '../metadata.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent {
  url: string = '';
  metadata: any = null;
  error: string = '';

  constructor(private metadataService: MetadataService) { }

  fetchMetadata() {
    this.metadataService.fetchMetadata(this.url).subscribe(
      data => {
        this.metadata = data;
        this.error = '';
      },
      error => {
        this.metadata = null;
        this.error = 'Failed to fetch metadata';
      }
    );
  }
}
