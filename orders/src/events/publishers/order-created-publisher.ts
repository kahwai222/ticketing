import { OrderCreatedEvent, Publisher, Subjects } from '@kwtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
