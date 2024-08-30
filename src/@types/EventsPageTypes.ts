export const enum EventAvailability {
  FillingUpFast = "Filling Up Fast",
  Moderate = "Moderate",
  Available = "Available",
  New = "New",
}

export const EventAvailabilityClass: Record<EventAvailability, string> = {
  [EventAvailability.FillingUpFast]: "filling-up-fast",
  [EventAvailability.Moderate]: "moderate",
  [EventAvailability.Available]: "available",
  [EventAvailability.New]: "new",
};

export type EventDetailProps = {
  eventImage: string;
  eventDate: string;
  eventAvailability: EventAvailability;
  eventName: string;
  eventLocation: string;
  eventTime: string;
  eventInterested: string;
  eventAttending: string;
  isInterested: boolean;
};
