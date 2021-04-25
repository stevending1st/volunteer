const indexRoutePathArr: Array<Array<string>> = [
  ["1", "/Home"],
  ["2", "/activitySquare"],
  ["3-1", "/activity/myActivity"],
  ["3-2", "/activity/createActivity"],
  ["3-3", "/activity/ActivityVerify"],
  ["3-4-1", "/activity/participantVerify/activitylist"],
  ["3-4-2", "/activity/participantVerify/participantlist"],
  ["5-2", "/manage/company"],
  ["5-3", "/manage/unit"],
  ["6", "/docs"]
];

const indexRoutePathMap: Map<string, string> = new Map();
indexRoutePathArr.forEach(item => {
  indexRoutePathMap.set(item[0], item[1]);
});

// export function routeArray2Tree(routeArr: Array<object>){
//   routeArr.map()
// }

export function routeArrayGetIndex(routePath: string): string {
  let returnStr = "";
  indexRoutePathArr.map(item => {
    if(routePath === item[1]){
      returnStr = item[0];
    }
  });
  return returnStr;
}

export function routeArrayGetRoutePath(indexStr: string): string {
  let returnStr = "";
  indexRoutePathArr.map(item => {
    if(indexStr === item[0]){
      returnStr = item[1];
    }
  });
  return returnStr;
}
