import request from "@/utils/request";

export function getActiveLists() {
  return request({
    url: "/getMyActiveLists",
    method: "GET"
  });
}
