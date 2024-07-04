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
    <title></title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="">
    <meta property="og:type" content="website">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary">
    <meta property="twitter:domain" content="">
    <meta property="twitter:url" content="">
    <meta name="twitter:title" content="">
    <meta name="twitter:site" content="@gustavoquinalha">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <meta name="twitter:image:alt" content="">

    <!-- Meta Tags Generated via https://www.gustavoquinalha.github.io/seotopper -->

    <script type="application/ld+json">
    {
      "@context": "http://schema.org/",
      "@type": "WebSite",
      "url": "",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>
  `

  form: FormGroup;
  formFields = [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'description', type: 'text', label: 'Description' },
    { name: 'url', type: 'text', label: 'Canonical URL' },
    { name: 'image', type: 'text', label: 'Image URL' },
    { name: 'imageAlt', type: 'text', label: 'Image alt text' },
    { name: 'author', type: 'text', label: 'Author' },
    {
      name: 'robots', type: 'select', label: 'Robots', options: [
        { value: 'index, follow', type: 'text', label: 'index, follow' },
        { value: 'index, nofollow', type: 'text', label: 'index, nofollow' },
        { value: 'noindex, follow', type: 'text', label: 'noindex, follow' },
        { value: 'noindex, nofollow', type: 'text', label: 'noindex, nofollow' },
      ]
    },
    { name: 'sitemap', type: 'text', label: 'URL site map' },
    { name: 'color', type: 'color', label: 'Color' },
    { name: 'locale', type: 'text', label: 'Locale' },
    { name: 'appId', type: 'text', label: 'Facebook APP ID' },
    { name: 'fb-admins', type: 'text', label: 'Facebook admins' }
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
      <title>${this.form.get('title')?.value}</title>
      <meta name="description" content="${this.form.get('description')?.value}">
      <meta name="author" content="${this.form.get('author')?.value}">

      <!-- Facebook Meta Tags -->
      <meta property="og:url" content="${this.form.get('url')?.value}">
      <meta property="og:type" content="website">
      <meta property="og:title" content="${this.form.get('title')?.value}">
      <meta property="og:description" content="${this.form.get('description')?.value}">
      <meta property="og:image" content="${this.form.get('image')?.value}">

      <!-- Twitter Meta Tags -->
      <meta name="twitter:card" content="summary">
      <meta property="twitter:domain" content="${this.form.get('url')?.value}">
      <meta property="twitter:url" content="${this.form.get('url')?.value}">
      <meta name="twitter:title" content="${this.form.get('title')?.value}">
      <meta name="twitter:site" content="@gustavoquinalha">
      <meta name="twitter:description" content="${this.form.get('description')?.value}">
      <meta name="twitter:image" content="${this.form.get('image')?.value}">
      <meta name="twitter:image:alt" content="${this.form.get('imageAlt')?.value}">

      <!-- Meta Tags Generated via https://www.gustavoquinalha.github.io/seotopper -->

      <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "WebSite",
        "url": "${this.form.get('url')?.value}",
        "name": "${this.form.get('title')?.value}",
        "alternateName": "${this.form.get('title')?.value}",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "${this.form.get('url')?.value}?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      </script>
    `
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
