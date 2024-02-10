export function parseObject(object: Record<string, any>) {
  let formData = new FormData();

  for(let prop in object) {
    formData.append(prop, object[prop]);
  }

  return formData;
}