import { Event } from '@angular/platform-browser/src/facade/browser';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SearchBarComponent } from '../../../app/components/common/search-bar/search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    });

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('.form-control')).nativeElement;
  });

  xit('should emit a empty string when we dispatch a input Event', () => {
    el.dispatchEvent(new Event('input'));
    expect(component.searchQuery).toEqual('');
  });

  xit('searchQuery should have a default value of null when nothing has been triggered in the inputbox.', () => {
    expect(component.searchQuery).toEqual(null);
  });
});
