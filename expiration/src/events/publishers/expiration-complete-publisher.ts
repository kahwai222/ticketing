import { Subjects, Publisher, ExpirationCompleteEvent } from '@kwtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
