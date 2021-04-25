import Mock, { Random } from "mockjs";
import BASE_URL from "../BASE_URL";
import TOKEN from "../TOKEN";
import { CODE_USER_NOT_REGISTERED, CODE_PASSWORD_ERR } from "../EERCODE";
// import verify from "../utils/verification";

// Mock.mock(`${ mockBaseURL }/test`, "get", {
//   status: 200,
//   message: "成功！",
//   data: {
//     "id|+1": 0,
//     name: "@cname()"
//   }
// });

Mock.mock(`${BASE_URL}/test`, "get", {
  status: 200,
  message: "成功！",
  data: {
    "id|+1": 0,
    name: "@cname()"
  }
});

Mock.mock(`${BASE_URL}/postLogin`, "post", function(option: any) {
  const req = JSON.parse(option.body);
  if (req.name !== "admin" && req.name !== "user") {
    return {
      errcode: CODE_USER_NOT_REGISTERED,
      msg: "账户未注册"
    };
  } else if (
    (req.name === "admin" && req.password === "admin") ||
    (req.name === "user" && req.password === "user")
  ) {
    return {
      errcode: 0,
      msg: "成功",
      token: TOKEN + " " + req.name
    };
  } else {
    return {
      errcode: CODE_PASSWORD_ERR,
      msg: "密码错误"
    };
  }
});

Mock.mock(`${BASE_URL}/getMenu`, "get", function(option: any) {
  const req = JSON.parse(option.body);
  if (req.name === "admin") {
    return {
      errcode: 0,
      msg: "成功",
      menuList: [
        {
          id: "1",
          menuSubName: "首页",
          menuSubIcon: "el-icon-s-home"
        },
        {
          id: "2",
          menuSubName: "活动广场",
          menuSubIcon: "el-icon-notebook-2"
        },
        {
          id: "3",
          menuSubName: "活动",
          menuSubIcon: "el-icon-table-lamp",
          children: [
            {
              id: "3-1",
              menuSubName: "我参与的活动"
            },
            {
              id: "3-2",
              menuSubName: "创建活动"
            },
            {
              id: "3-3",
              menuSubName: "活动审核"
            }
          ]
        },
        {
          id: "5",
          menuSubName: "系统管理",
          menuSubIcon: "el-icon-s-tools",
          children: [
            {
              id: "5-2",
              menuSubName: "学校管理"
            },
            {
              id: "5-3",
              menuSubName: "学院管理"
            }
          ]
        },
        {
          id: "6",
          menuSubName: "说明",
          menuSubIcon: "el-icon-s-help"
        }
      ]
    };
  } else if (req.name === "user") {
    return {
      errcode: 0,
      msg: "成功",
      menuList: [
        {
          id: "1",
          menuSubName: "首页",
          menuSubIcon: "el-icon-s-home"
        },
        {
          id: "2",
          menuSubName: "活动广场",
          menuSubIcon: "el-icon-notebook-2"
        },
        {
          id: "3",
          menuSubName: "活动",
          menuSubIcon: "el-icon-table-lamp",
          children: [
            {
              id: "3-1",
              menuSubName: "我参与的活动"
            }
          ]
        },
        {
          id: "6",
          menuSubName: "说明",
          menuSubIcon: "el-icon-s-help"
        }
      ]
    };
  }
});

Mock.mock(`${BASE_URL}/getUerInfoSimple`, "get", function(option: any) {
  const req = JSON.parse(option.body);
  if (req.name === "admin") {
    return {
      errcode: 0,
      msg: "成功",
      userInfoSimple: {
        userName: "张三",
        circleUrl: "https://empty",
        activeTimes: 30,
        activeLengthOfTime: 70
      }
    };
  } else if (req.name === "user") {
    return {
      errcode: 0,
      msg: "成功",
      userInfoSimple: {
        userName: "李四",
        circleUrl: "https://empty",
        activeTimes: 10,
        activeLengthOfTime: 30
      }
    };
  }
});

Mock.mock(`${BASE_URL}/getRecActLists`, "get", function(option: any) {
  return Mock.mock({
    errcode: 0,
    msg: "成功",
    "recActLists|0-10": [
      {
        activitynm: Random.cword(10, 15),
        activityTheme: Random.cword(8, 14),
        activityTeam: Random.cword(4) + "志愿者协会",
        activityPublisher: Random.cname(),
        activityST: Random.date("yyyy/MM/dd"),
        activityET: Random.date("yyyy/MM/dd")
      }
    ]
  });
});

Mock.mock(`${BASE_URL}/getMyActiveLists`, "get", function(option: any) {
  return Mock.mock({
    errcode: 0,
    msg: "成功",
    "myActiveLists|10-20": [
      {
        "id|+1": 123123123,
        name: Random.cword(10, 15),
        tags: [
          {
            content: Random.cword(3, 6),
            type: ""
          },
          {
            content: Random.cword(3, 6),
            type: "success"
          },
          {
            content: Random.cword(3, 6),
            type: "info"
          },
          {
            content: Random.cword(3, 6),
            type: "warning"
          },
          {
            content: Random.cword(3, 6),
            type: "danger"
          }
        ],
        introduction: Random.cparagraph(8, 16),
        status: Random.pick(["待启动", "报名中", "正在进行", "已结项"]),
        activeStartTime: Random.datetime("yyyy年MM月dd日 HH:mm"),
        activeAddress: Random.pick([
          Random.city(true) + " XXX街道 XXX小区",
          "线上"
        ]),
        activePlanPersonNum: Random.natural(15, 30),
        activeActualPersonNum: Random.natural(0, 15)
      }
    ]
  });
});
