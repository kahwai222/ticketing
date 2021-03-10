import { OrderCancelledEvent, Publisher, Subjects } from '@kwtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
