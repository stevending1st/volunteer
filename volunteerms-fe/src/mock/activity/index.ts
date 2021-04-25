import Mock, { Random } from "mockjs";
import BASE_URL from "../BASE_URL";

Mock.mock(`${ BASE_URL }/getActiveLists`, "get", function (option: any) {
  return Mock.mock({
    "errcode": 0,
    "msg": "成功",
    "recActLists|0-10": [
      {
        "activitynm": Random.cword(10, 15),
        "activityTheme": Random.cword(8, 14),
        "activityTeam": Random.cword(4) + "志愿者协会",
        "activityPublisher": Random.cname(),
        "activityST": Random.date("yyyy/MM/dd"),
        "activityET": Random.date("yyyy/MM/dd")
      }
    ],
    "activeLists|10-20": [
      {
        "id|+1": 123123123,
        "name": Random.cword(10, 15),
        "tags": [
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
        "introduction": Random.cparagraph(8, 16),
        "status": Random.pick(["待启动", "报名中", "正在进行", "已结项"]),
        "activeStartTime": Random.datetime("yyyy年MM月dd日 HH:mm"),
        "activeAddress": Random.pick( [Random.city(true) + " XXX街道 XXX小区", "线上"] ),
        "activePlanPersonNum": Random.natural(15, 30),
        "activeActualPersonNum": Random.natural(0, 15),
      }
    ]
  });
});
