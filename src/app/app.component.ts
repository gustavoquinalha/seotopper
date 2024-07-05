import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('teste');
  code = `
  <!-- HTML Meta Tags -->
  <meta charset="utf-8">
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="theme-color" content=""/>
  <link rel="icon" type="image/x-icon" href="">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="">
  <meta property="og:type" content="website">
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:image" content="">
  <meta property="og:locale" content=""/>

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="">
  <meta property="twitter:url" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:site" content="@gustavoquinalha">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">
  <meta name="twitter:image:alt" content="">

  <!-- Meta Tags Generated via https://gustavoquinalha.github.io/seotopper -->
  `

  form: FormGroup;
  formFields = [
    { name: 'title', type: 'text', description: '', label: 'Title' },
    { name: 'description', type: 'text', description: '', label: 'Description' },
    { name: 'url', type: 'text', description: '', label: 'Canonical URL' },
    { name: 'image', type: 'text', description: '', label: 'Image URL' },
    { name: 'imageAlt', type: 'text', description: '', label: 'Image alt text' },
    { name: 'author', type: 'text', description: '', label: 'Author' },
    {
      name: 'robots', type: 'select', description: '', label: 'Robots', options: [
        { value: 'index, follow', type: 'text', description: '', label: 'index, follow' },
        { value: 'index, nofollow', type: 'text', description: '', label: 'index, nofollow' },
        { value: 'noindex, follow', type: 'text', description: '', label: 'noindex, follow' },
        { value: 'noindex, nofollow', type: 'text', description: '', label: 'noindex, nofollow' },
      ]
    },
    {
      name: 'googlebot', type: 'select', description: '', label: 'Googlebot', options: [
        { value: 'index, follow', type: 'text', description: '', label: 'index, follow' },
        { value: 'index, nofollow', type: 'text', description: '', label: 'index, nofollow' },
        { value: 'noindex, follow', type: 'text', description: '', label: 'noindex, follow' },
        { value: 'noindex, nofollow', type: 'text', description: '', label: 'noindex, nofollow' },
      ]
    },
    { name: 'sitemap', type: 'text', description: '', label: 'URL site map' },
    { name: 'color', type: 'color', description: '', label: 'Color' },
    { name: 'locale', type: 'text', description: '', label: 'Locale' },
    { name: 'site', type: 'text', description: 'The Twitter “@username” the card should be attributed to.', label: 'Site' },
  ];

  constructor(private fb: FormBuilder) {
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
      <meta charset="utf-8">
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${this.form.get('title')?.value}</title>
      <meta name="description" content="${this.form.get('description')?.value}">
      <meta name="author" content="${this.form.get('author')?.value}">
      <meta name="theme-color" content="${this.form.get('color')?.value}"/>
      <link rel="icon" type="image/x-icon" href="${this.form.get('favicon')?.value}">

      <!-- Facebook Meta Tags -->
      <meta property="og:url" content="${this.form.get('url')?.value}">
      <meta property="og:type" content="website">
      <meta property="og:title" content="${this.form.get('title')?.value}">
      <meta property="og:description" content="${this.form.get('description')?.value}">
      <meta property="og:image" content="${this.form.get('image')?.value}">
      <meta property="og:locale" content="${this.form.get('locale')?.value}"/>

      <!-- Twitter Meta Tags -->
      <meta name="twitter:card" content="summary">
      <meta property="twitter:domain" content="${this.form.get('url')?.value}">
      <meta property="twitter:url" content="${this.form.get('url')?.value}">
      <meta name="twitter:title" content="${this.form.get('title')?.value}">
      <meta name="twitter:site" content="${this.form.get('site')?.value}">
      <meta name="twitter:description" content="${this.form.get('description')?.value}">
      <meta name="twitter:image" content="${this.form.get('image')?.value}">
      <meta name="twitter:image:alt" content="${this.form.get('imageAlt')?.value}">

      <!-- Meta Tags Generated via https://gustavoquinalha.github.io/seotopper -->
    `
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
