export interface RichTextData {
  /*
   * contentful nodeType
   * **/
  nodeType: string;
  /*
   * data
   * **/
  data: unknown;

  /*
   * data
   * **/
  content: RichTypeJson[];
}

export interface RichTextBodyField {
  /*
   * json breakdown of the content types in rich text
   * **/
  json: RichTypeData;
  /*
   * post body links
   *
   * **/
  links: unknown;
}
