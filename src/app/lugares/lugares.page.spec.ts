import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugaresPage } from './lugares.page';

describe('LugaresPage', () => {
  let component: LugaresPage;
  let fixture: ComponentFixture<LugaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
