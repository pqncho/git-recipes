export class Recipe {
  _name!: string;
  _category?: string;
  _description!: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get description(): string {

    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription;
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
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this.description}`;
  }
}
