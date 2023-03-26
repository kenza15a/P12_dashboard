import { userMockedService } from "./userMockedService";
import { userService } from "./userService";
import { currentEnvirement, envirements } from "../config/config"

/**
 * 
 * @returns { String } returns the service to call 
 * Depending on the envirement we are using
 */
export const getUserService = () => {
    if (currentEnvirement === envirements.developpement) {
        return userMockedService
    } else {
        return userService
    }
}
