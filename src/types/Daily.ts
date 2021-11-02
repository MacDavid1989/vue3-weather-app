export interface Daily {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}
