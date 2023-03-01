import { userMockedService } from "./userMockedService";
import { userService } from "./userService";
import { envirements } from "../config/config"
const currentEnvirement = "dev";
//identifier l'id
export const getUserService = () => {
    if (currentEnvirement === envirements.developpement) {
        return userMockedService
    } else {
        return userService
    }
}
