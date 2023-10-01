import ApiClient from "./ApiClient";
import Genre from "../entities/Genre";

export default new ApiClient<Genre>("/genres");