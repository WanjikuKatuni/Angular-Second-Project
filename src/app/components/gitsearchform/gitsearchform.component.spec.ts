import { ComponentFixture, TestBed } from '@angular/core/testing';
import { userInfo } from 'os';
import { User } from 'src/app/model/user';

import { GitsearchformComponent } from './gitsearchform.component';

describe('GitsearchformComponent', () => {
  
 
  let component: GitsearchformComponent;
  let fixture: ComponentFixture<GitsearchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsearchformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
