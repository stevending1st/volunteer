import request from "@/utils/request";

export function getActiveLists() {
  return request({
    url: "/getActiveLists",
    method: "GET"
  });
}

export function getActivityVerifyLists() {
  return request({
    url: "/getActivityVerifyLists",
    method: "GET"
  });
}
