import request from "@/utils/request";

export function getAllCompanyLists() {
  return request({
    url: "/getAllCompanyLists",
    method: "GET"
  });
}

export function getAllUnitLists() {
  return request({
    url: "/getAllUnitLists",
    method: "GET"
  });
}
