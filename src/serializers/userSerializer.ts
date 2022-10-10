import { BaseSerializer } from ".";

export default class UserSerializer extends BaseSerializer {
  protected attributes = ["id", "email", "createdAt", "updatedAt"];
}
