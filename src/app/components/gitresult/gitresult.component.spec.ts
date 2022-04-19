import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitresultComponent } from './gitresult.component';

describe('GitresultComponent', () => {
  let component: GitresultComponent;
  let fixture: ComponentFixture<GitresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
