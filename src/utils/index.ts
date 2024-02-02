export const getObjFromList = (list: any) => {
  return list.reduce((acc: any, obj: any) => {
    acc[obj["date"]] = obj.slots;
    return acc;
  }, {});
};
