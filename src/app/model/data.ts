export class Data {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public measurementUnit: string,
    public lowerLimit?: number,
    public upperLimit?: number,
    public descIfNormal?: string,
    public descIfLower?: string,
    public descIfHigher?: string
  ) {}
}
