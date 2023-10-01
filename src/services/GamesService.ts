import ApiClient from "./ApiClient";
import { Game } from "../entities/Game";

export default new ApiClient<Game>('/games');