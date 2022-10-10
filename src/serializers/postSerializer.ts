import { BaseSerializer } from ".";

export default class PostSerializer extends BaseSerializer {
  protected attributes = ["id", "title", "body", "updatedAt", "createdAt"];
}
