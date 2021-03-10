import { PaymentCreatedEvent, Publisher, Subjects } from '@kwtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
