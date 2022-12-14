export type Event = {
  id: string;
  eventName: string;
  dateAndHour: string;
  participants?: number;
  value: number;
  details: {
    pets: string;
    drink: string;
    age: string;
    clothing: string;
  };
};
