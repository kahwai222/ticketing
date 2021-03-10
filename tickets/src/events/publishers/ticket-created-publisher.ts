import { Publisher, Subjects, TicketCreatedEvent } from '@kwtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
