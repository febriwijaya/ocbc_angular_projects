export class Task {
  static nextId: number = 1;

  constructor(
    public task: string,
    public status: string,
    public category: string,
    public id: number = 0
  ){
    this.id = id ? id : Task.nextId++;
  }
}
