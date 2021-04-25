import request from "@/utils/request";

export function getTest() {
  return request.get("/test");
}

export function postLogin(data: { name: string; password: string }) {
  return request({
    url: "/postLogin",
    method: "POST",
    data
  });
}

export function getMenu(data: { name: string }) {
  return request({
    url: "/getMenu",
    method: "get",
    data
  });
}

export function getUerInfoSimple(data: { name: string }) {
  return request({
    url: "/getUerInfoSimple",
    method: "get",
    data
  });
}

export function getRecActLists() {
  return request({
    url: "/getRecActLists",
    method: "get"
  });
}

export function getMyActiveLists() {
  return request({
    url: "/getMyActiveLists",
    method: "get"
  });
}
