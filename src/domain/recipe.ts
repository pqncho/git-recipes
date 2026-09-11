export class Recipe {
  _name!: string;
  _category?: string;
  _description!: string;
  _preparationTime!: number;

  constructor(aName: string) {
    this.name = aName;
  }

  get description(): string {
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription;
  }

  get preparationTime(): number {
    return this._preparationTime;
  }

  set preparationTime(aPreparationTime: number) {
    if (Number.isNaN(aPreparationTime)) {
      throw new Error("El tiempo de preparacion es obligatorio.");
    }
    if (aPreparationTime < 0) {
      throw new Error("El tiempo de preparacion no puede ser menor a 0.");
    }
    this._preparationTime = aPreparationTime;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this.description} - tiempo de preparacion: ${this.preparationTime} minutos`;
  }
}
