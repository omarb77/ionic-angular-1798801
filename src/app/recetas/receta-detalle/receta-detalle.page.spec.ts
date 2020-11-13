import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaDetallePage } from './receta-detalle.page';

describe('RecetaDetallePage', () => {
  let component: RecetaDetallePage;
  let fixture: ComponentFixture<RecetaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
