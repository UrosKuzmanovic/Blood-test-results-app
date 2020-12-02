export class Data {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public measurementUnit: string,
    public lowerLimitMen: number,
    public upperLimitMen: number,
    public lowerLimitWomen: number,
    public upperLimitWomen: number,
    public lowerLimitKids: number,
    public upperLimitKids: number,
    public descIfLower: string,
    public descIfHigher: string
  ) {}
}
