import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { returnCode } from '../../utils/code';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  metatagsList = [
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
    { name: 'name', type: 'text', description: 'Defines the name of the page.', label: 'Site name' },
    { name: 'title', type: 'text', description: 'Defines the title of the HTML document, displaying text in the browser tab and aiding in search engine optimization (SEO).', label: 'Title' },
    { name: 'description', type: 'text', description: 'Provides a concise summary of the webpages content, often used by search engines to display in search results, enhancing click-through rates.', label: 'Description' },
    { name: 'canonical', type: 'text', description: 'Specifies the preferred URL for a webpage, consolidating search engine ranking signals and avoiding duplicate content issues.', label: 'Canonical URL' },
    { name: 'image', type: 'text', description: `Specifies the image displayed when sharing the webpage on platforms like Facebook, enhancing visual appeal. Og:images should have an aspect ratio of 1.91:1. This means that the width should be 1.9 X the height to avoid cropping issues. Your image shouldn't be larger than 8MB. Image size should be 1200 X 630 pixels (px).`, label: 'Image URL' },
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

  code? = returnCode(null);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    this.metatagsList.forEach(field => {
      if (field.type === 'select' && field.options) {
        this.form.addControl(field.name, this.fb.control(field.options[0].value));
      } else if (field.name === 'viewport') {
        this.form.addControl(field.name, this.fb.control('width=device-width, initial-scale=1'));
      } else {
        this.form.addControl(field.name, this.fb.control(''));
      }
    });

    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(_val => {
      console.log('this.form.value', this.form.value);
      this.code = returnCode(this.form.value);
    });
  }

  setFetchValue(data: any) {
    this.form.patchValue({
      charset: data.charset ?? '',
      viewport: data.viewport ?? '',
      name: data.name ?? '',
      title: data.title ?? '',
      description: data.description ?? '',
      canonical: data.canonicalURL ?? '',
      image: data.imageURL ?? '',
      imageAlt: data.imageAltText ?? '',
      favicon: data.favicon ?? '',
      color: data.themeColor ?? '',
      author: data.pageAuthor ?? '',
      robots: data.robots ?? '',
      googlebot: data.googlebot ?? '',
      sitemap: data.sitemap ?? '',
      locale: data.locale ?? '',
      site: data.pageSite ?? '',
    });
  }

  changeColor(value: any) {
    this.form.patchValue({
      color: value.target.value
    })
  }
}
