import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  url?: string = '';
  content? = {
    favicon : 'https://seotopper.netlify.app/favicon.ico',
    name : 'SeoTopper',
    canonical : 'https://seotopper.netlify.app/',
    description : `Optimize your website's online presence with our intuitive and efficient tool. You can generate custom meta tags in seconds, ensuring your content is properly indexed and gains visibility in search engines.`,
    title : 'SeoTopper - Preview and generate meta tags',
    image : 'https://seotopper.netlify.app/assets/intro.webp',
    imageAlt : 'SeoTopper OG:Image',
  }
}
