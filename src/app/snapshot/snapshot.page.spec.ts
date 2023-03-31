import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { SnapshotPage } from './snapshot.page';

describe('SnapshotPage', () => {
  let component: SnapshotPage;
  let fixture: ComponentFixture<SnapshotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), ExploreContainerComponent,SnapshotPage]
    }).compileComponents();

    fixture = TestBed.createComponent(SnapshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
