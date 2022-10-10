import { Model } from "sequelize";

export class BaseSerializer {
  object: any;

  protected attributes: Array<string | (() => any)> = [];

  constructor(object: Model) {
    this.object = object;
  }

  static serialize(object: Model) {
    return new this(object)._serialize();
  }

  static async serializeCollection(objects: Array<Model>) {
    const serializedObjects: Array<Model> = [];

    for (let i = 0; i < objects.length; i += 1) {
      serializedObjects.push(await this.serialize(objects[i]));
    }

    return serializedObjects;
  }

  private async _serialize() {
    const serializedObject: any = {};

    const promises = this.attributes.map(async (attr: string | (() => any)) => {
      if (typeof attr === "function") {
        serializedObject[attr.name] = await attr.bind(this).call(null);
      } else {
        serializedObject[attr] = this.object[attr];
      }
    });

    await Promise.all(promises);

    return serializedObject;
  }
}
