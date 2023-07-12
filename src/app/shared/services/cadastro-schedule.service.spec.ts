import { TestBed } from '@angular/core/testing';

import { CadastroScheduleService } from './cadastro-schedule.service';

describe('CadastroScheduleService', () => {
  let service: CadastroScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
