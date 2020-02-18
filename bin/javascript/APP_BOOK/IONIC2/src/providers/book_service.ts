import { Injectable } from '@angular/core';

declare var book_title: string;
declare var book_header: string;
declare var book_author: string;
declare var book_abstract: string;
declare var book_copyright: string;
declare var book_logo: string;

declare var book_menu_title: string;
declare var book_toc_title: string;
declare var book_about_title: string;
declare var book_copyright_title: string;

declare var book_locking: string;

declare var book_toc: any;

@Injectable()
export class BookService {
  chapters   : any = [];
  sections   : any = [];
  TOC        : number=-1;

  constructor() {
    this.processTOC();
  }

  processTOC() {
    var counter = 0;
    for (var i=0, n=book_toc.length; i<n; i++) {
      var entry = book_toc[i];
      if (entry.type=="chapter") {
        this.chapters.push(entry);
        for (var j=0, m=entry.sections.length; j<m; j++) {
          var section = entry.sections[j];
          section.id = i+"."+"j";
          this.sections[counter++] = section;
        }
      }
      else {
        if (entry.type=='toc') this.TOC = counter;
        this.sections[counter++] = entry;
      }
    } // end of for
  }

  // --------------------------
  // Info provided by user
  // --------------------------

  getTitle() { return book_title; }
  getHeader() { return book_header; }
  getAuthor() { return book_author; }
  getAbstract() { return book_abstract; }
  getCopyright() { return book_copyright; }
  getLogo() { return book_logo; }

  getMenuTitle() { return book_menu_title; }
  getCopyrightTitle() { return book_copyright_title; }
  getAboutTitle() { return book_about_title; }

  getLocking() { return book_locking; }

  // --------------------------
  // Chapters methods
  // --------------------------

  hasChapters() { return this.chapters.length>0; }
  getChapters() { return this.chapters; }
  getChapterTitle(chapter) { return chapter.title; }
  getChapterDescription(chapter) { return chapter.description || ""; }
  getChapterSections(chapter) { return chapter.sections; }

  // --------------------------
  // Sections methods
  // --------------------------

  hasTOC() { return this.TOC>=0; }
  getTOC() { return this.sections[this.TOC]; }

  getSections() { return this.sections; }

  getSectionTitle(section) { return section.title; }
  getSectionDescription(section) { return section.description || ""; }

  getSection(index:number) {
    if (index<0 || index>=this.sections.length) return this.getTOC();
    return this.sections[index];
  }

  getSectionIndex(section) {
    for (var i=0, n=this.sections.length; i<n; i++) {
      if (section==this.sections[i]) return i;
    }
    return -1;
  }

  // --------------------------
  // Sections back and forth
  // --------------------------

  getNextSection(index) {
    if (index<this.sections.length-1) return this.sections[index+1];
    return null;
  }

  getPreviousSection(index) {
    if (index>0) return this.sections[index-1];
    return null;
  }

  isLastSection(index:number) {
    return index == this.sections.length-1;
  }

  isFirstSection(index:number) {
    return index==0;
  }


}
