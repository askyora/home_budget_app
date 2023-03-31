import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FileUploaderPage } from './file-uploader.page';

describe('FileUploaderPage', () => {
  let component: FileUploaderPage;
  let fixture: ComponentFixture<FileUploaderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploaderPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
