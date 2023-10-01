import ApiClient from "./ApiClient";
import Platform from "../entities/Platform";

export default new ApiClient<Platform>('/platforms/lists/parents');