import "./user/index.ts";
import "./activity/index.ts";
import "./manage/index.ts";

/**
 * 由于 URL 拼接的原因，VUE_APP_BASE_URL 配置项后面不要带 `/` 号
 * 如：
 *   正确：
 *       VUE_APP_BASE_URL = "http://localhost:8080"
 *   错误
 *       VUE_APP_BASE_URL = "http://localhost:8080/"
 */
