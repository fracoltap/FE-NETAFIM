/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ConnectionOnlineService } from './connection-online.service';

describe('Service: Online', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionOnlineService]
    });
  });

  it('should ...', inject([ConnectionOnlineService], (service: ConnectionOnlineService) => {
    expect(service).toBeTruthy();
  }));
});
