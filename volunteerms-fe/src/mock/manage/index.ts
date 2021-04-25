import Mock, { Random } from "mockjs";
import BASE_URL from "../BASE_URL";

Mock.mock(`${BASE_URL}/getAllCompanyLists`, "get", function(option: any) {
  return {
    errcode: 0,
    msg: "成功",
    allCompanyLists: [
      {
        id: "01",
        num: "01",
        nm: "吉林农业大学"
      },
      {
        id: "02",
        num: "02",
        nm: "吉林农业专科学校"
      }
    ]
  };
});

Mock.mock(`${BASE_URL}/getAllUnitLists`, "get", function(option: any) {
  return {
    errcode: 0,
    msg: "成功",
    allUnitLists: [
      {
        id: "01",
        num: "01",
        nm: "文学院",
        companyId: "01",
        type: "1"
      },
      {
        id: "02",
        num: "02",
        nm: "理学院",
        companyId: "01",
        type: "1"
      },
      {
        id: "03",
        num: "04",
        nm: "飞机院",
        companyId: "02",
        type: "1"
      },
      {
        id: "04",
        num: "04",
        nm: "服务院",
        companyId: "02",
        type: "1"
      }
    ]
  };
});
