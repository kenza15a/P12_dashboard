import { userMockedService } from "./userMockedService";
import { userService } from "./userService";
import { currentEnvirement, envirements } from "../config/config"

//identifier l'id
export const getUserService = () => {
    if (currentEnvirement === envirements.developpement) {
        return userMockedService
    } else {
        return userService
    }
}
