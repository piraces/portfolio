import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Raúl Piracés'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Raúl Piracés');
  }));
  it('should render footer in a h4 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Copyright');
  }));
});
