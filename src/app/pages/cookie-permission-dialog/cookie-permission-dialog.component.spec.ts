import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePermissionDialogComponent } from './cookie-permission-dialog.component';

describe('CookiePermissionDialogComponent', () => {
  let component: CookiePermissionDialogComponent;
  let fixture: ComponentFixture<CookiePermissionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiePermissionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiePermissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
