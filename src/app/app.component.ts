import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MetadataService } from 'src/app/metadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  code? = `
  <!-- HTML Meta Tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link rel="canonical" href="">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <meta name="robots" content="index, follow">
  <meta name="googlebot" content="index, follow">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="theme-color" content="">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="">
  <meta property="og:type" content="website">
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:image" content="">
  <meta property="og:locale" content="">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="">
  <meta name="twitter:site" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">
  <meta name="twitter:image:alt" content="">

  <!-- Meta Tags Generated via https://gustavoquinalha.github.io/seotopper -->
  `;
  form: FormGroup;
  formFields = [
    {
      name: 'charset', type: 'select', description: 'Specifies the character encoding for the HTML document, ensuring proper display of text.', label: 'Charset', options: [
        { value: "UTF-8", },
        { value: "ISO-8859-1", },
        { value: "ISO-8859-2", },
        { value: "ISO-8859-3", },
        { value: "ISO-8859-4", },
        { value: "ISO-8859-5", },
        { value: "ISO-8859-6", },
        { value: "ISO-8859-7", },
        { value: "ISO-8859-8", },
        { value: "ISO-8859-9", },
        { value: "ISO-8859-10", },
        { value: "ISO-8859-11", },
        { value: "ISO-8859-13", },
        { value: "ISO-8859-14", },
        { value: "ISO-8859-15", },
        { value: "ISO-8859-16", },
        { value: "Windows-1250", },
        { value: "Windows-1251", },
        { value: "Windows-1252", },
        { value: "Windows-1253", },
        { value: "Windows-1254", },
        { value: "Windows-1255", },
        { value: "Windows-1256", },
        { value: "Windows-1257", },
        { value: "Windows-1258", },
        { value: "KOI8-R", },
        { value: "KOI8-U", },
        { value: "GB18030", },
        { value: "Big5", },
        { value: "Shift_JIS", },
        { value: "EUC-JP", },
        { value: "EUC-KR", },
      ],
    },
    { name: 'viewport', type: 'text', description: 'Controls the layout and scaling of a webpage on different devices, improving responsiveness and user experience.', label: 'Viewport' },
    { name: 'title', type: 'text', description: 'Defines the title of the HTML document, displaying text in the browser tab and aiding in search engine optimization (SEO).', label: 'Title' },
    { name: 'description', type: 'text', description: 'Provides a concise summary of the webpages content, often used by search engines to display in search results, enhancing click-through rates.', label: 'Description' },
    { name: 'canonical', type: 'text', description: 'Specifies the preferred URL for a webpage, consolidating search engine ranking signals and avoiding duplicate content issues.', label: 'Canonical URL' },
    { name: 'image', type: 'text', description: 'Specifies the image displayed when sharing the webpage on platforms like Facebook, enhancing visual appeal.', label: 'Image URL' },
    { name: 'imageAlt', type: 'text', description: 'Provides alternative text for the image specified in og:image, improving accessibility and SEO when shared on platforms supporting Open Graph.', label: 'Image alt text' },
    { name: 'favicon', type: 'text', description: 'Specifies the favicon, enhancing website recognition in browsers and bookmarks.', label: 'Favicon' },
    { name: 'color', type: 'text', description: 'Defines the color theme for the browsers UI elements when a webpage is viewed on mobile devices, enhancing user experience and brand consistency.', label: 'Theme color' },
    { name: 'author', type: 'text', description: 'Specifies the author of the webpage, providing attribution for content creation and ownership.', label: 'Author' },
    {
      name: 'robots', type: 'select', description: 'Controls how search engines index and display content, influencing webpage visibility and accessibility in search results.', label: 'Robots', options: [
        { value: 'index, follow' },
        { value: 'index, nofollow' },
        { value: 'noindex, follow' },
        { value: 'noindex, nofollow' },
      ]
    },
    {
      name: 'googlebot', type: 'select', description: 'Controls how search engines index and display content, influencing webpage visibility and accessibility in search results.', label: 'Googlebot', options: [
        { value: 'index, follow' },
        { value: 'index, nofollow' },
        { value: 'noindex, follow' },
        { value: 'noindex, nofollow' },
      ]
    },
    { name: 'sitemap', type: 'text', description: '', label: 'URL site map' },
    { name: 'locale', type: 'text', description: 'Defines the language and region of a webpage, aiding in content and regional settings adaptation.', label: 'Locale' },
    { name: 'site', type: 'text', description: 'The Twitter “@username” the card should be attributed to.', label: 'Site' },
  ];

  constructor(private fb: FormBuilder, private metadataService: MetadataService) {
    this.form = this.fb.group({});
    this.formFields.forEach(field => {
      if (field.type === 'select' && field.options) {
        this.form.addControl(field.name, this.fb.control(field.options[0].value));
      } else {
        this.form.addControl(field.name, this.fb.control(''));
      }
    });

    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.code = `
  <!-- HTML Meta Tags -->
  <meta charset="${this.form?.get('charset')?.value}">
  <meta name="viewport" content="${this.form?.get('viewport')?.value}">
  <title>${this.form?.get('title')?.value}</title>
  <link rel="canonical" href="${this.form?.get('canonical')?.value}">
  <link rel="icon" type="image/x-icon" href="${this.form?.get('favicon')?.value}">
  <meta name="robots" content="${this.form?.get('robots')?.value}">
  <meta name="googlebot" content="${this.form?.get('googlebot')?.value}">
  <meta name="description" content="${this.form?.get('description')?.value}">
  <meta name="author" content="${this.form?.get('author')?.value}">
  <meta name="theme-color" content="${this.form?.get('color')?.value}">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="${this.form?.get('canonical')?.value}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${this.form?.get('title')?.value}">
  <meta property="og:description" content="${this.form?.get('description')?.value}">
  <meta property="og:image" content="${this.form?.get('image')?.value}">
  <meta property="og:locale" content="${this.form?.get('locale')?.value}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${this.form?.get('title')?.value}">
  <meta name="twitter:site" content="${this.form?.get('site')?.value}">
  <meta name="twitter:description" content="${this.form?.get('description')?.value}">
  <meta name="twitter:image" content="${this.form?.get('image')?.value}">
  <meta name="twitter:image:alt" content="${this.form?.get('imageAlt')?.value}">

  <!-- Meta Tags Generated via https://gustavoquinalha.github.io/seotopper -->
  `});
  }

  onSubmit() {
    console.log(this.form.value);
  }

  setFetchValue(data: any) {
    this.form.patchValue({
      charset: data.charset,
      viewport: data.viewport,
      title: data.title,
      description: data.description,
      canonical: data.canonicalURL,
      image: data.imageURL,
      imageAlt: data.imageAltText,
      favicon: data.favicon,
      color: data.themeColor,
      author: data.pageAuthor,
      robots: data.robots,
      googlebot: data.googlebot,
      sitemap: data.sitemap,
      locale: data.locale,
      site: data.pageSite,
    });
  }

  changeColor(value: any) {
    this.form.patchValue({
      color: value.target.value
    })
  }
}
