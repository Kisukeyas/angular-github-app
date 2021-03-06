import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIssueComponent } from './open-issue.component';

describe('OpenIssueComponent', () => {
  let component: OpenIssueComponent;
  let fixture: ComponentFixture<OpenIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
