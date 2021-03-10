import { Publisher, Subjects, TicketUpdatedEvent } from '@kwtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
