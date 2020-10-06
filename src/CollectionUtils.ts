/**
 * @author Markus Schnittker
 */
export class CollectionUtils {

    public static getFirstMapEntry(map: Map<any, any>): any {
      let key = map.keys().next().value;
      return map.get(key);
    }
  
    public static getFirstMapKey(map: Map<any, any>): any {
      return map.keys().next().value;
    }
  
    public static updateMap(map: Map<any, any>, key: any, value: any): any {
      let before = new Map();
      let current = new Map();
      let after = new Map();
      let isBefore: boolean = true;
      map.forEach(((curValue, curKey) => {
        if (!isBefore) {
          after.set(curKey, curValue);
        } else if (key === curKey) {
          current.set(curKey, value);
          isBefore = false;
        } else {
          before.set(curKey,curValue);
        }
      }));
      return new Map([...before, ...current, ...after]);
    }
  }
  